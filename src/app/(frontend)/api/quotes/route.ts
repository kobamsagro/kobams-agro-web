import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'
import { sendQuoteNotification } from '@/lib/email'
import { createNotification } from '@/lib/notifications'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    const quotes = await payload.find({
      collection: 'quotes',
      sort: '-createdAt',
      limit: 50,
    })

    return NextResponse.json({
      success: true,
      quotes: quotes.docs,
      total: quotes.totalDocs,
    })
  } catch (error) {
    console.error('Failed to fetch quotes:', error)
    return NextResponse.json({ error: 'Failed to fetch quotes' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('📝 Quote request received:', body)

    const {
      name,
      company,
      email,
      phone,
      product,
      quantity,
      containerSize,
      shippingPreference,
      packagingOption,
      message,
    } = body

    if (
      !name ||
      !company ||
      !email ||
      !product ||
      !quantity ||
      !containerSize ||
      !shippingPreference ||
      !packagingOption
    ) {
      console.error('❌ Missing required fields:', {
        name: !!name,
        company: !!company,
        email: !!email,
        product: !!product,
        quantity: !!quantity,
        containerSize: !!containerSize,
        shippingPreference: !!shippingPreference,
        packagingOption: !!packagingOption,
      })
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    console.log('✅ All required fields present')

    const payload = await getPayload({ config: configPromise })
    console.log('✅ Payload instance obtained')

    // Save to database
    try {
      const quoteResult = await payload.create({
        collection: 'quotes',
        data: {
          name,
          company,
          email,
          phone: phone || undefined,
          product,
          quantity,
          containerSize,
          shippingPreference,
          packagingOption,
          message: message || undefined,
          status: 'new',
        },
      })
      console.log('✅ Quote saved to database:', quoteResult.id)

      // Create notification (non-blocking)
      try {
        await createNotification({
          type: 'quote',
          message: `New quote request from ${company} for ${product}`,
          details: `${quantity} MT - ${containerSize} container - ${shippingPreference}`,
          relatedCollection: 'quotes',
          relatedId: quoteResult.id,
          priority: 'high',
        })
        console.log('✅ Notification created successfully')
      } catch (err) {
        console.error('⚠️ Failed to create notification:', err)
      }

      // Send email notification (non-blocking)
      try {
        const emailResult = await sendQuoteNotification({
          name,
          company,
          email,
          phone: phone || undefined,
          product,
          quantity,
          containerSize,
          shippingPreference,
          packagingOption,
          message: message || undefined,
        })
        console.log('✅ Email notification result:', emailResult)
      } catch (err) {
        console.error('⚠️ Failed to send email:', err)
      }

      return NextResponse.json(
        {
          success: true,
          message:
            'Thank you! Your quote request has been submitted successfully. We will contact you soon.',
        },
        { status: 201 },
      )
    } catch (dbError) {
      console.error('❌ Database error:', dbError)
      throw dbError
    }
  } catch (error) {
    console.error('❌ Error submitting quote request:', error)
    return NextResponse.json(
      { error: 'Failed to submit quote request. Please try again.' },
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
    let quoteId = null

    // Check for the specific format from the admin interface
    quoteId = searchParams.get('where[and][0][id][in][0]')

    // If not found, try other common formats
    if (!quoteId) {
      quoteId = searchParams.get('id')
    }

    // Try to parse from request body if not in URL
    if (!quoteId) {
      try {
        const body = await request.json()
        quoteId = body.id || body.ids?.[0]
      } catch {
        // Body might not be JSON, that's okay
      }
    }

    if (!quoteId) {
      console.error('No quote ID found in request')
      return NextResponse.json({ error: 'No quote ID provided' }, { status: 400 })
    }

    console.log('Attempting to delete quote with ID:', quoteId)

    const payload = await getPayload({ config: configPromise })

    // Delete the quote
    const result = await payload.delete({
      collection: 'quotes',
      id: quoteId,
    })

    console.log('Delete result:', result)

    // Return response in Payload's expected format for bulk operations
    return NextResponse.json({
      message: 'Deleted successfully.',
      docs: [result],
      errors: [],
    })
  } catch (error) {
    console.error('Failed to delete quote:', error)
    return NextResponse.json(
      {
        error: 'Failed to delete quote',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
