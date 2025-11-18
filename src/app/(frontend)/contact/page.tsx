import React from 'react'
import type { Metadata } from 'next'
import ContactForm from '@/components/Contact/ContactForm'
import ContactInfo from '@/components/Contact/ContactInfo'
import ContactMap from '@/components/Contact/ContactMap'

export const metadata: Metadata = {
  title: "Contact Us | Kobam's Agro Solutions",
  description:
    "Ready to partner with us? Let's discuss how we can help grow your agricultural business.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#184504] text-white py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Ready to partner with us? Let&apos;s discuss how we can help grow your agricultural business
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <ContactInfo />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <ContactMap />
    </main>
  )
}
