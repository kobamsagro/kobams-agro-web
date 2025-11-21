'use client'
import React from 'react'
import Link from 'next/link'

export default function ServicesHero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#1a4d2e]/90 to-[#2d5f3f]/90">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/assets/service-hero.png)',
          
        }}
      />

      {/* Content */}
      <div className="container mx-auto my-18 py-20 px-6 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Empowering Agriculture Through
          <br />
          Innovation & Global Trade
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
          From farm to market, we provide comprehensive solutions that connect Nigerian farmers to
          global opportunities
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
            className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  )
}
