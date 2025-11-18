'use client'
import React from 'react'
import Link from 'next/link'

export default function ProductsCTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Place Your Order?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get in touch with our team to discuss your requirements, request samples, or place bulk
            orders for export
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-[#1a4d2e] font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
            >
              Request a Quote
            </Link>
            <Link
              href="/export-guide"
              className="inline-block bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
            >
              View Export Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
