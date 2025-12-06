import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'
import { sendContactNotification } from '@/lib/email'
import { createNotification } from '@/lib/notifications'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const fullName = formData.get('fullName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = await getPayload({ config: configPromise })

    // Save to database
    const contactResult = await payload.create({
      collection: 'contacts',
      data: {
        fullName,
        email,
        phone: phone || undefined,
        subject,
        message,
        status: 'new',
      },
    })

    // Create notification
    await createNotification({
      type: 'contact',
      message: `New contact form submission from ${fullName}`,
      details: `Subject: ${subject}`,
      relatedCollection: 'contacts',
      relatedId: contactResult.id,
      priority: 'normal',
    })

    // Send email notification
    await sendContactNotification({
      fullName,
      email,
      phone: phone || undefined,
      subject,
      message,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! We will get back to you soon.',
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 },
    )
  }
}
