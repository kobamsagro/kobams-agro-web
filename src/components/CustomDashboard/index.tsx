'use client'
import { useEffect, useState } from 'react'

interface Activity {
  id: string
  type: 'quote' | 'contact' | 'inquiry' | 'testimonial'
  message: string
  createdAt: string
  details?: string
  isRead: boolean
}

export default function CustomDashboard() {
  console.log('🎯 CustomDashboard component loaded!')

  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivities, setSelectedActivities] = useState<Set<string>>(new Set())
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [stats, setStats] = useState({
    totalQuotes: 0,
    totalContacts: 0,
    totalInquiries: 0,
    totalTestimonials: 0,
  })

  const itemsPerPage = 10

  useEffect(() => {
    fetchRecentActivities()
    fetchStats()
  }, [currentPage])

  const fetchRecentActivities = async () => {
    setLoading(true)
    try {
      // Fetch all notifications with pagination
      const response = await fetch(
        `/api/notifications/all?page=${currentPage}&limit=${itemsPerPage}`,
      )
      const data = await response.json()

      if (data.success) {
        setActivities(data.notifications || [])
        setTotalPages(Math.ceil((data.total || 0) / itemsPerPage))
      } else {
        // Fallback to unread notifications if all endpoint doesn't exist
        const fallbackResponse = await fetch('/api/notifications/unread')
        const fallbackData = await fallbackResponse.json()
        if (fallbackData.success) {
          const allNotifications = fallbackData.notifications || []
          const startIndex = (currentPage - 1) * itemsPerPage
          const endIndex = startIndex + itemsPerPage
          setActivities(allNotifications.slice(startIndex, endIndex))
          setTotalPages(Math.ceil(allNotifications.length / itemsPerPage))
        }
      }
    } catch (error) {
      console.error('Failed to fetch activities:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchStats = async () => {
    try {
      // You can create API endpoints to get these stats
      setStats({
        totalQuotes: 45,
        totalContacts: 23,
        totalInquiries: 67,
        totalTestimonials: 12,
      })
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    }
  }

  const handleSelectActivity = (activityId: string) => {
    const newSelected = new Set(selectedActivities)
    if (newSelected.has(activityId)) {
      newSelected.delete(activityId)
    } else {
      newSelected.add(activityId)
    }
    setSelectedActivities(newSelected)
  }

  const handleSelectAll = () => {
    if (selectedActivities.size === activities.length) {
      setSelectedActivities(new Set())
    } else {
      setSelectedActivities(new Set(activities.map((a) => a.id)))
    }
  }

  const markAsRead = async (activityIds: string[]) => {
    try {
      const promises = activityIds.map((id) =>
        fetch(`/api/notifications/${id}/read`, { method: 'PATCH' }),
      )
      await Promise.all(promises)

      // Update local state
      setActivities((prev) =>
        prev.map((activity) =>
          activityIds.includes(activity.id) ? { ...activity, isRead: true } : activity,
        ),
      )
      setSelectedActivities(new Set())
    } catch (error) {
      console.error('Failed to mark as read:', error)
    }
  }

  const handleMarkSelectedAsRead = () => {
    if (selectedActivities.size > 0) {
      markAsRead(Array.from(selectedActivities))
    }
  }

  const deleteActivities = async (activityIds: string[]) => {
    try {
      const promises = activityIds.map((id) =>
        fetch(`/api/notifications/${id}/delete`, { method: 'DELETE' }),
      )
      await Promise.all(promises)

      // Update local state - remove deleted activities
      setActivities((prev) => prev.filter((activity) => !activityIds.includes(activity.id)))
      setSelectedActivities(new Set())

      // Refresh if current page is now empty
      if (activities.length - activityIds.length === 0 && currentPage > 1) {
        setCurrentPage((prev) => prev - 1)
      } else {
        fetchRecentActivities()
      }
    } catch (error) {
      console.error('Failed to delete activities:', error)
    }
  }

  const handleDeleteSelected = () => {
    if (selectedActivities.size > 0) {
      if (confirm(`Are you sure you want to delete ${selectedActivities.size} activities?`)) {
        deleteActivities(Array.from(selectedActivities))
      }
    }
  }

  const handleDeleteRead = () => {
    const readActivityIds = activities.filter((a) => a.isRead).map((a) => a.id)
    if (readActivityIds.length > 0) {
      if (confirm(`Are you sure you want to delete ${readActivityIds.length} read activities?`)) {
        deleteActivities(readActivityIds)
      }
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'quote':
        return '💰'
      case 'contact':
        return '📧'
      case 'inquiry':
        return '❓'
      case 'testimonial':
        return '⭐'
      default:
        return '📄'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getActivityTypeColor = (type: string) => {
    switch (type) {
      case 'quote':
        return '#28a745'
      case 'contact':
        return '#007bff'
      case 'inquiry':
        return '#ffc107'
      case 'testimonial':
        return '#dc3545'
      default:
        return '#6c757d'
    }
  }

  return (
    <div className="dashboard-custom" style={{ width: '100%', maxWidth: 'none' }}>
      {/* Stats Cards */}
      {/* <div className="dashboard__stats">
        <div className="dashboard__stat-card">
          <div className="dashboard__stat-number">{stats.totalQuotes}</div>
          <div className="dashboard__stat-label">Total Quotes</div>
        </div>
        <div className="dashboard__stat-card">
          <div className="dashboard__stat-number">{stats.totalContacts}</div>
          <div className="dashboard__stat-label">Contact Forms</div>
        </div>
        <div className="dashboard__stat-card">
          <div className="dashboard__stat-number">{stats.totalInquiries}</div>
          <div className="dashboard__stat-label">Product Inquiries</div>
        </div>
        <div className="dashboard__stat-card">
          <div className="dashboard__stat-number">{stats.totalTestimonials}</div>
          <div className="dashboard__stat-label">Testimonials</div>
        </div>
      </div> */}

      {/* Recent Activities */}
      <div className="dashboard__card" style={{ width: '100%' }}>
        <div className="activity-header">
          <h3 style={{ marginBottom: '10px', fontSize: '26px' }}>Recent Activities</h3>
          <div
            className="activity-controls"
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          >
            {selectedActivities.size > 0 && (
              <>
                <button
                  onClick={handleMarkSelectedAsRead}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    fontSize: '14px',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#218838')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
                >
                  Mark {selectedActivities.size} as Read
                </button>
                <button
                  onClick={handleDeleteSelected}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    fontSize: '14px',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#c82333')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#dc3545')}
                >
                  Delete {selectedActivities.size}
                </button>
              </>
            )}
            {activities.some((a) => a.isRead) && (
              <button
                onClick={handleDeleteRead}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '14px',
                  transition: 'all 0.2s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#5a6268')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#6c757d')}
              >
                Delete All Read
              </button>
            )}
          </div>
        </div>

        <div className="activity-table">
          {/* Table Header */}
          <div
            className="activity-table-header"
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 140px 1fr 180px 120px',
              background: 'linear-gradient(135deg, #184504 0%, #2d5f3f 100%)',
              padding: '16px 12px',
              fontWeight: 600,
              color: 'white',
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              gap: '8px',
            }}
          >
            <div
              className="activity-checkbox"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <input
                type="checkbox"
                checked={activities.length > 0 && selectedActivities.size === activities.length}
                onChange={handleSelectAll}
                className="activity-checkbox-input"
                style={{ width: '16px', height: '16px', cursor: 'pointer' }}
              />
            </div>
            <div className="activity-type" style={{ display: 'flex', alignItems: 'center' }}>
              Type
            </div>
            <div className="activity-message" style={{ display: 'flex', alignItems: 'center' }}>
              Message
            </div>
            <div className="activity-date" style={{ display: 'flex', alignItems: 'center' }}>
              Date
            </div>
            <div
              className="activity-status"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Status
            </div>
          </div>

          {/* Table Body */}
          <div className="activity-table-body">
            {loading ? (
              <div className="activity-loading">
                <div className="loading-spinner"></div>
                <p>Loading activities...</p>
              </div>
            ) : activities.length === 0 ? (
              <div className="activity-empty">
                <p>No recent activities</p>
              </div>
            ) : (
              activities.map((activity) => (
                <div
                  key={activity.id}
                  className={`activity-row ${activity.isRead ? 'read' : 'unread'}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 140px 1fr 180px 120px',
                    padding: '16px 12px',
                    borderBottom: '1px solid #f0f0f0',
                    alignItems: 'center',
                    minHeight: '70px',
                    gap: '8px',
                    backgroundColor: activity.isRead ? '#f9f9f9' : '#fff8e1',
                    borderLeft: activity.isRead ? 'none' : '4px solid #FFCB05',
                    opacity: activity.isRead ? 0.8 : 1,
                    transition: 'all 0.2s',
                  }}
                >
                  <div
                    className="activity-checkbox"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedActivities.has(activity.id)}
                      onChange={() => handleSelectActivity(activity.id)}
                      className="activity-checkbox-input"
                      style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                  </div>
                  <div
                    className="activity-type"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                  >
                    <div
                      className="activity-icon-badge"
                      style={{
                        backgroundColor: getActivityTypeColor(activity.type),
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        color: 'white',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        flexShrink: 0,
                      }}
                    >
                      {getActivityIcon(activity.type)}
                    </div>
                    <span
                      className="activity-type-text"
                      style={{
                        fontSize: '13px',
                        textTransform: 'capitalize',
                        color: '#495057',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {activity.type}
                    </span>
                  </div>
                  <div className="activity-message" style={{ paddingRight: '16px' }}>
                    <div
                      className="activity-title"
                      style={{
                        fontWeight: 600,
                        color: '#2d4a1f',
                        marginBottom: '6px',
                        lineHeight: 1.4,
                        fontSize: '14px',
                      }}
                    >
                      {activity.message}
                    </div>
                    {activity.details && (
                      <div
                        className="activity-details"
                        style={{
                          fontSize: '12px',
                          color: '#6c757d',
                          lineHeight: 1.4,
                          marginTop: '4px',
                        }}
                      >
                        {activity.details}
                      </div>
                    )}
                  </div>
                  <div
                    className="activity-date"
                    style={{
                      fontSize: '12px',
                      color: '#6c757d',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {formatDate(activity.createdAt)}
                  </div>
                  <div
                    className="activity-status"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <span
                      className={`status-badge ${activity.isRead ? 'read' : 'unread'}`}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        backgroundColor: activity.isRead ? '#d4edda' : '#fff3cd',
                        color: activity.isRead ? '#155724' : '#856404',
                      }}
                    >
                      {activity.isRead ? 'Read' : 'Unread'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '1.5rem',
              paddingTop: '1rem',
              borderTop: '1px solid #e5e7eb',
            }}
          >
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: currentPage === 1 ? '#f3f4f6' : '#155724',
                color: currentPage === 1 ? '#9ca3af' : '#ffffff',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                fontWeight: '500',
                transition: 'all 0.2s',
              }}
            >
              Previous
            </button>

            <div
              style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '500',
              }}
            >
              Page {currentPage} of {totalPages}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: currentPage === totalPages ? '#f3f4f6' : '#155724',
                color: currentPage === totalPages ? '#9ca3af' : '#ffffff',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                fontWeight: '500',
                transition: 'all 0.2s',
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
