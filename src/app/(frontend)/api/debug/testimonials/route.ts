import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    // Test if we can read testimonials
    const testimonials = await payload.find({
      collection: 'testimonials',
      limit: 5,
    })

    // Test if we can create a test testimonial
    const testTestimonial = await payload.create({
      collection: 'testimonials',
      data: {
        name: 'Test User',
        role: 'Test Role',
        location: 'Test Location',
        rating: 5,
        testimonial: 'This is a test testimonial for debugging',
        status: 'hidden', // Hidden so it doesn't show publicly
      },
    })

    // Test if we can delete the test testimonial
    await payload.delete({
      collection: 'testimonials',
      id: testTestimonial.id,
    })

    return NextResponse.json({
      success: true,
      message: 'All operations successful',
      testimonialCount: testimonials.totalDocs,
    })
  } catch (error) {
    console.error('Debug error:', error)
    return NextResponse.json(
      {
        error: 'Debug failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
