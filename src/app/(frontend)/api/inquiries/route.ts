import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'
import { sendInquiryNotification } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { fullName, companyName, email, phone, country, product, messageType, message } = body

    if (!fullName || !companyName || !email || !country || !product || !messageType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = await getPayload({ config: configPromise })

    // Save to database
    await payload.create({
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
