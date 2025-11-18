import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const name = formData.get('name') as string
    const role = formData.get('role') as string
    const location = formData.get('location') as string
    const email = formData.get('email') as string
    const rating = parseInt(formData.get('rating') as string)
    const testimonial = formData.get('testimonial') as string

    if (!name || !role || !location || !rating || !testimonial) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = await getPayload({ config: configPromise })

    await payload.create({
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

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your testimonial has been published successfully.',
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error submitting testimonial:', error)
    return NextResponse.json(
      { error: 'Failed to submit testimonial. Please try again.' },
      { status: 500 },
    )
  }
}
