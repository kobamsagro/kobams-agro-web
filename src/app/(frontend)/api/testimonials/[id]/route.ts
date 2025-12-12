import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    if (!id) {
      return NextResponse.json({ error: 'Testimonial ID is required' }, { status: 400 })
    }

    const payload = await getPayload({ config: configPromise })

    await payload.delete({
      collection: 'testimonials',
      id,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Testimonial deleted successfully',
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error deleting testimonial:', error)
    return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 })
  }
}

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    if (!id) {
      return NextResponse.json({ error: 'Testimonial ID is required' }, { status: 400 })
    }

    const payload = await getPayload({ config: configPromise })

    const testimonial = await payload.findByID({
      collection: 'testimonials',
      id,
    })

    return NextResponse.json({
      success: true,
      testimonial,
    })
  } catch (error) {
    console.error('Error fetching testimonial:', error)
    return NextResponse.json({ error: 'Failed to fetch testimonial' }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const data = await request.json()

    if (!id) {
      return NextResponse.json({ error: 'Testimonial ID is required' }, { status: 400 })
    }

    const payload = await getPayload({ config: configPromise })

    const testimonial = await payload.update({
      collection: 'testimonials',
      id,
      data,
    })

    return NextResponse.json({
      success: true,
      testimonial,
      message: 'Testimonial updated successfully',
    })
  } catch (error) {
    console.error('Error updating testimonial:', error)
    return NextResponse.json({ error: 'Failed to update testimonial' }, { status: 500 })
  }
}
