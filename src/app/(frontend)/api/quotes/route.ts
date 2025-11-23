import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'
import { sendQuoteNotification } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, company, email, phone, product, quantity, message } = body

    if (!name || !company || !email || !product || !quantity) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = await getPayload({ config: configPromise })

    // Save to database
    await payload.create({
      collection: 'quotes',
      data: {
        name,
        company,
        email,
        phone: phone || undefined,
        product,
        quantity,
        message: message || undefined,
        status: 'new',
      },
    })

    // Send email notification
    await sendQuoteNotification({
      name,
      company,
      email,
      phone: phone || undefined,
      product,
      quantity,
      message: message || undefined,
    })

    return NextResponse.json(
      {
        success: true,
        message:
          'Thank you! Your quote request has been submitted successfully. We will contact you soon.',
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error submitting quote request:', error)
    return NextResponse.json(
      { error: 'Failed to submit quote request. Please try again.' },
      { status: 500 },
    )
  }
}
