'use client'
import React from 'react'

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
      <p className="text-gray-600 mb-8">
        We&apos;re here to help! Reach out to us through any of the following channels
      </p>

      <div className="space-y-6">
        {/* Call Us */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[#184504] rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
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
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-700">+234 (0) 123 456 7890</p>
            <p className="text-sm text-gray-500 mt-1">Monday - Friday: 8:00 AM - 5:00 PM</p>
          </div>
        </div>

        {/* Email Us */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[#184504] rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
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
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-700">info@kobamsagrosolution.com</p>
            <p className="text-gray-700">sales@kobamsagro.com</p>
          </div>
        </div>

        {/* Visit Us */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[#184504] rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-700">123 Agricultural Way, Ikeja</p>
            <p className="text-gray-700">Lagos, Nigeria</p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[#184504] rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
            <div className="space-y-1 text-gray-700">
              <p className="flex justify-between gap-8">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 5:00 PM</span>
              </p>
              <p className="flex justify-between gap-8">
                <span>Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </p>
              <p className="flex justify-between gap-8">
                <span>Sunday:</span>
                <span>Closed</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
