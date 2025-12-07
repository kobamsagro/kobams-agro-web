import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'
import { sendQuoteNotification } from '@/lib/email'
import { createNotification } from '@/lib/notifications'

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
