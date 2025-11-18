import React from 'react'
import type { Metadata } from 'next'
import FAQContent from '@/components/FAQ/FAQContent'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "FAQs | Kobam's Agro Solutions",
  description: 'Everything you need to know about our processes, products, and partnerships.',
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#184504] text-white py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FAQs</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Everything you need to know about our processes, products, and partnerships
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <FAQContent />

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Didn&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our support team is here to help you with any questions about our products, services,
              or partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email Support */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-[#184504] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm mb-6">Get detailed answers to your questions</p>
              <Link
                href="mailto:info@kobamsagro.com"
                className="inline-block bg-[#184504] hover:bg-[#2d5f3f] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Send Email
              </Link>
            </div>

            {/* Live Chat */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-[#184504] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm mb-6">Get instant help from our team</p>
              <button className="inline-block bg-[#184504] hover:bg-[#2d5f3f] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Start Chat
              </button>
            </div>

            {/* Phone Support */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-[#184504] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 text-sm mb-6">Speak directly with our experts</p>
              <Link
                href="tel:+2341234567890"
                className="inline-block bg-[#184504] hover:bg-[#2d5f3f] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
