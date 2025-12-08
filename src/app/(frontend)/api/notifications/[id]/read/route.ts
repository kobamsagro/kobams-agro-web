import { NextResponse } from 'next/server'
import { markNotificationAsRead } from '@/lib/notifications'

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params

    if (!id) {
      return NextResponse.json({ error: 'Notification ID is required' }, { status: 400 })
    }

    await markNotificationAsRead(id)

    return NextResponse.json(
      {
        success: true,
        message: 'Notification marked as read',
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error marking notification as read:', error)
    return NextResponse.json({ error: 'Failed to mark notification as read' }, { status: 500 })
  }
}
