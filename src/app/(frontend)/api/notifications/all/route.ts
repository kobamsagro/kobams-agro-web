import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    console.log('🔍 Fetching all notifications with pagination:', { page, limit })
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'notifications' as any,
      sort: '-createdAt',
      limit,
      page,
    })

    console.log('📊 Found', result.docs.length, 'notifications, total:', result.totalDocs)

    return NextResponse.json(
      {
        success: true,
        notifications: result.docs,
        total: result.totalDocs,
        page: result.page,
        totalPages: result.totalPages,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('❌ Error fetching all notifications:', error)
    return NextResponse.json({ error: 'Failed to fetch notifications' }, { status: 500 })
  }
}
