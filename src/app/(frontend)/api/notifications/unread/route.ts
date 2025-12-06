import { NextResponse } from 'next/server'
import { getUnreadNotifications } from '@/lib/notifications'

export async function GET() {
  try {
    const notifications = await getUnreadNotifications()

    return NextResponse.json(
      {
        success: true,
        notifications,
        count: notifications.length,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error fetching notifications:', error)
    return NextResponse.json({ error: 'Failed to fetch notifications' }, { status: 500 })
  }
}
