'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NotificationBadge() {
  const [unreadCount, setUnreadCount] = useState(0)
  const router = useRouter()

  useEffect(() => {
    fetchUnreadCount()
    // Poll for new notifications every 30 seconds
    const interval = setInterval(fetchUnreadCount, 30000)
    return () => clearInterval(interval)
  }, [])

  const fetchUnreadCount = async () => {
    try {
      const response = await fetch('/api/notifications/unread')
      const data = await response.json()
      setUnreadCount(data.count || 0)
    } catch (error) {
      console.error('Failed to fetch notification count:', error)
    }
  }

  const handleClick = () => {
    router.push('/admin/collections/notifications')
  }

  if (unreadCount === 0) return null

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex items-center justify-center p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
      title={`${unreadCount} unread notification${unreadCount !== 1 ? 's' : ''}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM9 21H15V23H9V21Z"></path>
      </svg>
      <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full min-w-[20px] animate-pulse">
        {unreadCount > 99 ? '99+' : unreadCount}
      </span>
    </button>
  )
}
