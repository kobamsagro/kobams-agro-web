import { Resend } from 'resend'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'kobamsagrosolutions@gmail.com'
const FROM_EMAIL = process.env.FROM_EMAIL || 'notifications@kobamsagrosolutions.com'

// Only initialize Resend if API key is available
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

interface ContactEmailData {
  fullName: string
  email: string
  phone?: string
  subject: string
  message: string
}

interface QuoteEmailData {
  name: string
  company: string
  email: string
  phone?: string
  product: string
  quantity: string
  containerSize: string
  shippingPreference: string
  packagingOption: string
  message?: string
}

interface InquiryEmailData {
  fullName: string
  companyName: string
  email: string
  phone?: string
  country: string
  product: string
  messageType: string
  message?: string
}

export async function sendContactNotification(data: ContactEmailData) {
  // If no Resend API key, just log to console
  if (!resend) {
    console.log('📧 [EMAIL NOTIFICATION] Contact Form Submission')
    console.log('To:', ADMIN_EMAIL)
    console.log('Subject:', `New Contact Form Submission: ${data.subject}`)
    console.log('---')
    console.log('Name:', data.fullName)
    console.log('Email:', data.email)
    if (data.phone) console.log('Phone:', data.phone)
    console.log('Subject:', data.subject)
    console.log('Message:', data.message)
    console.log('Submitted at:', new Date().toLocaleString())
    console.log('---')
    return { success: true }
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
    })
    return { success: true }
  } catch (error) {
    console.error('Failed to send contact notification:', error)
    return { success: false, error }
  }
}

export async function sendQuoteNotification(data: QuoteEmailData) {
  // If no Resend API key, just log to console
  if (!resend) {
    console.log('📧 [EMAIL NOTIFICATION] Quote Request')
    console.log('To:', ADMIN_EMAIL)
    console.log('Subject:', `New Quote Request: ${data.product}`)
    console.log('---')
    console.log('Product:', data.product)
    console.log('Quantity:', data.quantity, 'MT')
    console.log('Container Size:', data.containerSize)
    console.log('Shipping Preference:', data.shippingPreference)
    console.log('Packaging Option:', data.packagingOption)
    console.log('Name:', data.name)
    console.log('Company:', data.company)
    console.log('Email:', data.email)
    if (data.phone) console.log('Phone:', data.phone)
    if (data.message) console.log('Message:', data.message)
    console.log('Submitted at:', new Date().toLocaleString())
    console.log('---')
    return { success: true }
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Quote Request: ${data.product}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Product:</strong> ${data.product}</p>
        <p><strong>Quantity:</strong> ${data.quantity} MT</p>
        <hr>
        <h3>Shipping & Packaging Details</h3>
        <p><strong>Container Size:</strong> ${data.containerSize}</p>
        <p><strong>Shipping Preference:</strong> ${data.shippingPreference}</p>
        <p><strong>Packaging Option:</strong> ${data.packagingOption}</p>
        <hr>
        <h3>Customer Details</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        ${data.message ? `<p><strong>Additional Message:</strong></p><p>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
    })
    return { success: true }
  } catch (error) {
    console.error('Failed to send quote notification:', error)
    return { success: false, error }
  }
}

export async function sendInquiryNotification(data: InquiryEmailData) {
  // If no Resend API key, just log to console
  if (!resend) {
    console.log('📧 [EMAIL NOTIFICATION] Product Inquiry')
    console.log('To:', ADMIN_EMAIL)
    console.log('Subject:', `New Inquiry: ${data.messageType} - ${data.product}`)
    console.log('---')
    console.log('Message Type:', data.messageType)
    console.log('Product:', data.product)
    console.log('Name:', data.fullName)
    console.log('Company:', data.companyName)
    console.log('Email:', data.email)
    if (data.phone) console.log('Phone:', data.phone)
    console.log('Country/Region:', data.country)
    if (data.message) console.log('Message:', data.message)
    console.log('Submitted at:', new Date().toLocaleString())
    console.log('---')
    return { success: true }
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Inquiry: ${data.messageType} - ${data.product}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Message Type:</strong> <span style="background-color: #F4C430; padding: 4px 8px; border-radius: 4px;">${data.messageType}</span></p>
        <p><strong>Product:</strong> ${data.product}</p>
        <hr>
        <h3>Customer Details</h3>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Company:</strong> ${data.companyName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        <p><strong>Country/Region:</strong> ${data.country}</p>
        ${data.message ? `<p><strong>Message:</strong></p><p>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
    })
    return { success: true }
  } catch (error) {
    console.error('Failed to send inquiry notification:', error)
    return { success: false, error }
  }
}
