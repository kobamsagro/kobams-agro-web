'use client'
import React from 'react'

export default function ContactMap() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-gray-600">Visit our office at any of our locations</p>
        </div>

        {/* Map Embed */}
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
            {/* Replace with your actual Google Maps embed or map component */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.395180315744455!3d6.524379095346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kobam's Agro Solutions Location"
            />
          </div>

          {/* Location Cards */}
          {/* <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Head Office</h3>
              <p className="text-gray-700 mb-1">123 Agricultural Way, Ikeja</p>
              <p className="text-gray-700 mb-3">Lagos, Nigeria</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a4d2e] font-semibold hover:underline inline-flex items-center gap-1"
              >
                Get Directions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Warehouse & Processing</h3>
              <p className="text-gray-700 mb-1">456 Export Drive, Apapa</p>
              <p className="text-gray-700 mb-3">Lagos, Nigeria</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a4d2e] font-semibold hover:underline inline-flex items-center gap-1"
              >
                Get Directions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
