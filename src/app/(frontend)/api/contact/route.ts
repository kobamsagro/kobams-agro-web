import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'
import { sendContactNotification } from '@/lib/email'
import { createNotification } from '@/lib/notifications'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    const contacts = await payload.find({
      collection: 'contacts',
      sort: '-createdAt',
      limit: 50,
    })

    return NextResponse.json({
      success: true,
      contacts: contacts.docs,
      total: contacts.totalDocs,
    })
  } catch (error) {
    console.error('Failed to fetch contacts:', error)
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 })
  }
}

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
export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url)
    const searchParams = url.searchParams

    console.log('DELETE request URL:', url.toString())
    console.log('Search params:', Object.fromEntries(searchParams.entries()))

    // Try to extract ID from various possible parameter formats
    let contactId = null

    // Check for the specific format from the admin interface
    contactId = searchParams.get('where[and][0][id][in][0]')

    // If not found, try other common formats
    if (!contactId) {
      contactId = searchParams.get('id')
    }

    // Try to parse from request body if not in URL
    if (!contactId) {
      try {
        const body = await request.json()
        contactId = body.id || body.ids?.[0]
      } catch {
        // Body might not be JSON, that's okay
      }
    }

    if (!contactId) {
      console.error('No contact ID found in request')
      return NextResponse.json({ error: 'No contact ID provided' }, { status: 400 })
    }

    console.log('Attempting to delete contact with ID:', contactId)

    const payload = await getPayload({ config: configPromise })

    // Delete the contact
    const result = await payload.delete({
      collection: 'contacts',
      id: contactId,
    })

    console.log('Delete result:', result)

    // Return response in Payload's expected format for bulk operations
    return NextResponse.json({
      message: 'Deleted successfully.',
      docs: [result],
      errors: [],
    })
  } catch (error) {
    console.error('Failed to delete contact:', error)
    return NextResponse.json(
      {
        error: 'Failed to delete contact',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
