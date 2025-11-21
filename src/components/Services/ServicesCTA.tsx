'use client'
import React from 'react'
import Link from 'next/link'

export default function ServicesCTA() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d4a1f] mb-4">
          Ready to Start Your Agro?
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Join hundreds of farmers and businesses who trust Kobam's Agro Solutions for their
          agricultural needs. Let's grow together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-[#1a4d2e] font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/products"
            className="inline-block bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  )
}
