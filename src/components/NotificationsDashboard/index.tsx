'use client'
import React, { useEffect, useState } from 'react'

interface Notification {
  id: string
  type: string
  message: string
  details?: string
  isRead: boolean
  priority: string
  createdAt: string
}

export default function NotificationsDashboard() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

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

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-500">No new notifications</p>
      ) : (
        <div className="space-y-3">
          {notifications.slice(0, 10).map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border-2 ${getPriorityColor(notification.priority)}`}
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
              </div>
            </div>
          ))}
        </div>
      )}
      {notifications.length > 10 && (
        <p className="text-sm text-gray-500 mt-4">
          Showing 10 of {notifications.length} notifications
        </p>
      )}
    </div>
  )
}
