import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    const testimonials = await payload.find({
      collection: 'testimonials',
      sort: '-createdAt',
      limit: 50,
    })

    return NextResponse.json({
      success: true,
      testimonials: testimonials.docs,
      total: testimonials.totalDocs,
    })
  } catch (error) {
    console.error('Failed to fetch testimonials:', error)
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const payload = await getPayload({ config: configPromise })

    const testimonial = await payload.create({
      collection: 'testimonials',
      data,
    })

    return NextResponse.json({
      success: true,
      testimonial,
      message: 'Testimonial created successfully',
    })
  } catch (error) {
    console.error('Failed to create testimonial:', error)
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url)
    const searchParams = url.searchParams

    console.log('DELETE request URL:', url.toString())
    console.log('Search params:', Object.fromEntries(searchParams.entries()))

    // Try to extract ID from various possible parameter formats
    let testimonialId = null

    // Check for the specific format from the admin interface
    testimonialId = searchParams.get('where[and][0][id][in][0]')

    // If not found, try other common formats
    if (!testimonialId) {
      testimonialId = searchParams.get('id')
    }

    // Try to parse from request body if not in URL
    if (!testimonialId) {
      try {
        const body = await request.json()
        testimonialId = body.id || body.ids?.[0]
      } catch {
        // Body might not be JSON, that's okay
      }
    }

    if (!testimonialId) {
      console.error('No testimonial ID found in request')
      return NextResponse.json({ error: 'No testimonial ID provided' }, { status: 400 })
    }

    console.log('Attempting to delete testimonial with ID:', testimonialId)

    const payload = await getPayload({ config: configPromise })

    // Delete the testimonial
    const result = await payload.delete({
      collection: 'testimonials',
      id: testimonialId,
    })

    console.log('Delete result:', result)

    // Return response in Payload's expected format for bulk operations
    return NextResponse.json({
      message: 'Deleted successfully.',
      docs: [result],
      errors: [],
    })
  } catch (error) {
    console.error('Failed to delete testimonial:', error)
    return NextResponse.json(
      {
        error: 'Failed to delete testimonial',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
