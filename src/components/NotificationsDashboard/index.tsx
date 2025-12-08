'use client'
import { useEffect, useState } from 'react'

interface Notification {
  id: string
  type: string
  message: string
  details?: string
  isRead: boolean
  priority: string
  createdAt: string
}

const ITEMS_PER_PAGE = 10

export default function NotificationsDashboard() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchNotifications()
  }, [])

  const fetchNotifications = async () => {
    try {
      const response = await fetch('/api/notifications/unread')
      const data = await response.json()
      setNotifications(data.notifications || [])
    } catch (error) {
      console.error('Failed to fetch notifications:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleMarkAsRead = async (notificationId: string) => {
    try {
      const response = await fetch(`/api/notifications/${notificationId}/read`, {
        method: 'PATCH',
      })

      if (response.ok) {
        // Update local state to mark as read
        setNotifications((prev) =>
          prev.map((notif) =>
            notif.id === notificationId ? { ...notif, isRead: true } : notif,
          ),
        )
      }
    } catch (error) {
      console.error('Failed to mark notification as read:', error)
    }
  }

  const handleDelete = async (notificationId: string) => {
    try {
      const response = await fetch(`/api/notifications/${notificationId}/delete`, {
        method: 'DELETE',
      })

      if (response.ok) {
        // Remove from local state
        setNotifications((prev) => prev.filter((notif) => notif.id !== notificationId))
      }
    } catch (error) {
      console.error('Failed to delete notification:', error)
    }
  }

  const handleClearRead = async () => {
    const readNotifications = notifications.filter((n) => n.isRead)

    for (const notification of readNotifications) {
      await handleDelete(notification.id)
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800 border-red-300'
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-300'
      case 'normal':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'low':
        return 'bg-gray-100 text-gray-800 border-gray-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'quote':
        return '💰'
      case 'contact':
        return '📧'
      case 'inquiry':
        return '❓'
      case 'testimonial':
        return '⭐'
      case 'order':
        return '📦'
      default:
        return '🔔'
    }
  }

  if (loading) {
    return (
      <div className="p-6">
        <p className="text-gray-500">Loading notifications...</p>
      </div>
    )
  }

  const hasReadNotifications = notifications.some((n) => n.isRead)
  
  // Pagination calculations
  const totalPages = Math.ceil(notifications.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentNotifications = notifications.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Recent Activity</h2>
        {hasReadNotifications && (
          <button
            onClick={handleClearRead}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
          >
            Clear Read
          </button>
        )}
      </div>
      {notifications.length === 0 ? (
        <p className="text-gray-500">No new notifications</p>
      ) : (
        <>
          <div className="space-y-3">
            {currentNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border-2 ${getPriorityColor(notification.priority)} ${
                  notification.isRead ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{getTypeIcon(notification.type)}</span>
                  <div className="flex-1">
                    <p className="font-semibold">{notification.message}</p>
                    {notification.details && (
                      <p className="text-sm mt-1 opacity-80">{notification.details}</p>
                    )}
                    <p className="text-xs mt-2 opacity-60">
                      {new Date(notification.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {!notification.isRead && (
                      <button
                        onClick={() => handleMarkAsRead(notification.id)}
                        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-xs font-medium"
                        title="Mark as read"
                      >
                        ✓
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(notification.id)}
                      className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-xs font-medium"
                      title="Delete"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-between border-t pt-4">
              <div className="text-sm text-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, notifications.length)} of{' '}
                {notifications.length} notifications
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
