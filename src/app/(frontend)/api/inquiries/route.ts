import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'
import { sendInquiryNotification } from '@/lib/email'
import { createNotification } from '@/lib/notifications'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    const inquiries = await payload.find({
      collection: 'inquiries',
      sort: '-createdAt',
      limit: 50,
    })

    return NextResponse.json({
      success: true,
      inquiries: inquiries.docs,
      total: inquiries.totalDocs,
    })
  } catch (error) {
    console.error('Failed to fetch inquiries:', error)
    return NextResponse.json({ error: 'Failed to fetch inquiries' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { fullName, companyName, email, phone, country, product, messageType, message } = body

    if (!fullName || !companyName || !email || !country || !product || !messageType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = await getPayload({ config: configPromise })

    // Save to database
    const inquiryResult = await payload.create({
      collection: 'inquiries',
      data: {
        fullName,
        companyName,
        email,
        phone: phone || undefined,
        country,
        product,
        messageType,
        message: message || undefined,
        status: 'new',
      },
    })

    // Create notification
    await createNotification({
      type: 'inquiry',
      message: `New ${messageType} inquiry from ${companyName}`,
      details: `Product: ${product} - Country: ${country}`,
      relatedCollection: 'inquiries',
      relatedId: inquiryResult.id,
      priority: 'high',
    })

    // Send email notification
    await sendInquiryNotification({
      fullName,
      companyName,
      email,
      phone: phone || undefined,
      country,
      product,
      messageType,
      message: message || undefined,
    })

    return NextResponse.json(
      {
        success: true,
        message:
          'Thank you! Your inquiry has been submitted successfully. We will get back to you soon.',
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error submitting inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to submit inquiry. Please try again.' },
      { status: 500 },
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url)
    const searchParams = url.searchParams

    console.log('DELETE request URL:', url.toString())
    console.log('Search params:', Object.fromEntries(searchParams.entries()))

    // Try to extract ID from various possible parameter formats
    let inquiryId = null

    // Check for the specific format from the admin interface
    inquiryId = searchParams.get('where[and][0][id][in][0]')

    // If not found, try other common formats
    if (!inquiryId) {
      inquiryId = searchParams.get('id')
    }

    // Try to parse from request body if not in URL
    if (!inquiryId) {
      try {
        const body = await request.json()
        inquiryId = body.id || body.ids?.[0]
      } catch {
        // Body might not be JSON, that's okay
      }
    }

    if (!inquiryId) {
      console.error('No inquiry ID found in request')
      return NextResponse.json({ error: 'No inquiry ID provided' }, { status: 400 })
    }

    console.log('Attempting to delete inquiry with ID:', inquiryId)

    const payload = await getPayload({ config: configPromise })

    // Delete the inquiry
    const result = await payload.delete({
      collection: 'inquiries',
      id: inquiryId,
    })

    console.log('Delete result:', result)

    // Return response in Payload's expected format for bulk operations
    return NextResponse.json({
      message: 'Deleted successfully.',
      docs: [result],
      errors: [],
    })
  } catch (error) {
    console.error('Failed to delete inquiry:', error)
    return NextResponse.json(
      {
        error: 'Failed to delete inquiry',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
