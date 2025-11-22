import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@kobamsagro.com'
const FROM_EMAIL = process.env.FROM_EMAIL || 'notifications@kobamsagro.com'

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
  message?: string
}

interface InquiryEmailData {
  fullName: string
  companyName: string
  email: string
  phone?: string
  country: string
  product: string
  message?: string
}

export async function sendContactNotification(data: ContactEmailData) {
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
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Product Inquiry: ${data.product}`,
      html: `
        <h2>New Product Inquiry</h2>
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
