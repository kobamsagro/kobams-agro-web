import { getPayload } from 'payload'
import configPromise from '@payload-config'

type NotificationType = 'quote' | 'contact' | 'inquiry' | 'testimonial' | 'order' | 'system'
type NotificationPriority = 'low' | 'normal' | 'high' | 'urgent'

interface CreateNotificationParams {
  type: NotificationType
  message: string
  details?: string
  relatedCollection?: string
  relatedId?: string
  priority?: NotificationPriority
}

export async function createNotification(params: CreateNotificationParams) {
  try {
    console.log('🔔 Creating notification:', params)
    const payload = await getPayload({ config: configPromise })

    const result = await payload.create({
      collection: 'notifications' as any,
      data: {
        type: params.type,
        message: params.message,
        details: params.details,
        relatedCollection: params.relatedCollection,
        relatedId: params.relatedId,
        priority: params.priority || 'normal',
        isRead: false,
      },
    })

    console.log('✅ Notification created successfully:', result.id)
    return result
  } catch (error) {
    console.error('❌ Failed to create notification:', error)
    throw error
  }
}

export async function markNotificationAsRead(notificationId: string) {
  try {
    const payload = await getPayload({ config: configPromise })

    await payload.update({
      collection: 'notifications' as any,
      id: notificationId,
      data: {
        isRead: true,
      } as any,
    })
  } catch (error) {
    console.error('Failed to mark notification as read:', error)
  }
}

export async function getUnreadNotifications() {
  try {
    console.log('🔍 Fetching unread notifications...')
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'notifications' as any,
      where: {
        isRead: {
          equals: false,
        },
      },
      sort: '-createdAt',
      limit: 50,
    })

    console.log('📊 Found', result.docs.length, 'unread notifications')
    return result.docs
  } catch (error) {
    console.error('❌ Failed to get unread notifications:', error)
    return []
  }
}

export async function deleteNotification(notificationId: string) {
  try {
    console.log('🗑️ Deleting notification:', notificationId)
    const payload = await getPayload({ config: configPromise })

    await payload.delete({
      collection: 'notifications' as any,
      id: notificationId,
    })

    console.log('✅ Notification deleted successfully')
  } catch (error) {
    console.error('❌ Failed to delete notification:', error)
    throw error
  }
}
