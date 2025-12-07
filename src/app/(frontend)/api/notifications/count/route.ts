import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'notifications' as any,
      where: {
        isRead: {
          equals: false,
        },
      },
      limit: 0, // Just get the count
    })

    return NextResponse.json(
      {
        success: true,
        count: result.totalDocs,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error fetching notification count:', error)
    return NextResponse.json({ error: 'Failed to fetch notification count' }, { status: 500 })
  }
}
