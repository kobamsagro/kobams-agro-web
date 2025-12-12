import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'
import { createNotification } from '@/lib/notifications'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const name = formData.get('name') as string
    const role = formData.get('role') as string
    const location = formData.get('location') as string
    const email = formData.get('email') as string
    const ratingStr = formData.get('rating') as string
    const testimonial = formData.get('testimonial') as string

    // Validate required fields
    if (!name || !role || !location || !ratingStr || !testimonial) {
      console.error('Validation failed:', { name, role, location, rating: ratingStr, testimonial })
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const rating = parseInt(ratingStr, 10)

    // Validate rating is a valid number
    if (isNaN(rating) || rating < 1 || rating > 5) {
      console.error('Invalid rating:', ratingStr)
      return NextResponse.json({ error: 'Invalid rating value' }, { status: 400 })
    }

    const payload = await getPayload({ config: configPromise })

    const result = await payload.create({
      collection: 'testimonials',
      data: {
        name,
        role,
        location,
        email: email || undefined,
        rating,
        testimonial,
        status: 'approved',
      },
    })

    // Create notification
    await createNotification({
      type: 'testimonial',
      message: `New testimonial from ${name} (${rating} stars)`,
      details: `${role} from ${location}`,
      relatedCollection: 'testimonials',
      relatedId: result.id,
      priority: 'low',
    })

    console.log('✅ Testimonial created successfully:', result.id)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your testimonial has been published successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('❌ Error submitting testimonial:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit testimonial. Please try again.',
      },
      { status: 500 },
    )
  }
}
