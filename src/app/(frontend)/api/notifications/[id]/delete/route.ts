import { NextResponse } from 'next/server'
import { deleteNotification } from '@/lib/notifications'

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params

    if (!id) {
      return NextResponse.json({ error: 'Notification ID is required' }, { status: 400 })
    }

    await deleteNotification(id)

    return NextResponse.json(
      {
        success: true,
        message: 'Notification deleted successfully',
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error deleting notification:', error)
    return NextResponse.json({ error: 'Failed to delete notification' }, { status: 500 })
  }
}
