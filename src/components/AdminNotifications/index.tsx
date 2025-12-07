'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface Notification {
  id: string
  type: string
  message: string
  details?: string
  priority: string
  createdAt: string
}

export default function AdminNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    fetchNotifications()
    // Poll for new notifications every 30 seconds
    const interval = setInterval(fetchNotifications, 30000)
    return () => clearInterval(interval)
  }, [])

  const fetchNotifications = async () => {
    try {
      const response = await fetch('/api/notifications/unread')
      const data = await response.json()
      setNotifications(data.notifications || [])
      setUnreadCount(data.count || 0)
    } catch (error) {
      console.error('Failed to fetch notifications:', error)
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-500'
      case 'high':
        return 'bg-orange-500'
      case 'normal':
        return 'bg-blue-500'
      case 'low':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
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

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative inline-flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
        title={`${unreadCount} unread notification${unreadCount !== 1 ? 's' : ''}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
          className="text-gray-700"
        >
          <path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM9 21H15V23H9V21Z"></path>
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full min-w-[20px] animate-pulse">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {showDropdown && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShowDropdown(false)} />
          <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-[500px] overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-lg">Notifications</h3>
              {unreadCount > 0 && (
                <span className="text-sm text-gray-500">{unreadCount} unread</span>
              )}
            </div>

            {notifications.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <p>No new notifications</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {notifications.slice(0, 5).map((notification) => (
                  <Link
                    key={notification.id}
                    href={`/admin/collections/notifications/${notification.id}`}
                    className="block p-4 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">
                        {getTypeIcon(notification.type)}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`w-2 h-2 rounded-full ${getPriorityColor(notification.priority)}`}
                          />
                          <p className="font-semibold text-sm text-gray-900 truncate">
                            {notification.message}
                          </p>
                        </div>
                        {notification.details && (
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {notification.details}
                          </p>
                        )}
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(notification.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="p-3 border-t border-gray-200 bg-gray-50">
              <Link
                href="/admin/collections/notifications"
                className="block text-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                onClick={() => setShowDropdown(false)}
              >
                View All Notifications
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
