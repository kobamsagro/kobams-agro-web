'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-6">
            About Kobam&apos;s Agro Solutions
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-4">
            We are a Nigerian-based agricultural enterprise committed to transforming Africa&apos;s
            agricultural landscape through innovation, sustainability, and global export standards.
          </p>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Our focus is on mechanized farming, agro-products marketing & exportation, and agro
            research & technology — ensuring top-quality produce that meets international demand.
          </p>
        </div>

        {/* Our Journey Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/assets/farming-field.jpg"
              alt="Agricultural field"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Established in 2010, Kobam&apos;s Agro Solutions began as a small-scale trading
                company focused on local produce. Over the years, our commitment to quality and
                sustainable farming practices has propelled us into becoming one of Nigeria&apos;s
                trusted exporters of cocoa, sesame seeds, soya beans, and other key commodities.
              </p>
              <p>
                Today, we partner with hundreds of farmers, empowering communities while supplying
                to global markets.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mission Card */}
          <div className="bg-[#1a4d2e] text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-gray-100 leading-relaxed">
              To drive sustainable agricultural growth in Africa by connecting farmers to global
              opportunities through innovation, mechanization, and transparency.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#1a4d2e] text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-gray-100 leading-relaxed">
              To be Africa&apos;s leading brand in agricultural exports, known for integrity,
              quality, and sustainable impact.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-[#1a4d2e] font-semibold px-8 py-4 rounded-lg transition-colors shadow-md"
          >
            Learn More About Us
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
