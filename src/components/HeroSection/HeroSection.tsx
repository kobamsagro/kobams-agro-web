'use client'
import React from 'react'
import Image from 'next/image'
import HeroImage from '../../../public/assets/kobams-hero.png'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={HeroImage}
        alt="hero-section"
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/60 z-10" /> */}

      <div className="container relative z-20 mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Connecting Local <span className="text-white">#AgroProducts</span> to Global Demand
            </h1>

            <p className="text-white text-lg md:text-xl max-w-xl">
              Explore quality agricultural products from Kobam&apos;s Agro Solutions, trusted
              suppliers for international markets.
            </p>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-[#184504] font-semibold px-8 py-4 rounded-lg transition-colors">
              Discover Our Products
            </button>

            {/* Stats */}
            <div className="flex gap-8 md:gap-16 pt-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">500+</div>
                <div className="text-white text-sm md:text-base">Farmers</div>
              </div>
              <div className="border-l border-white pl-8 md:pl-16">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">1000+</div>
                <div className="text-white text-sm md:text-base">Products</div>
              </div>
              <div className="border-l border-white pl-8 md:pl-16">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">50+</div>
                <div className="text-white text-sm md:text-base">Countries</div>
              </div>
            </div>
          </div>
          {/* stat end */}
          {/* Right Content - Product Cards */}
          <div className="relative grid grid-cols-2 h-[600px]">
            {/* Cocoa Beans Card - Left Full Height */}
            <div className="relative rounded-3xl overflow-hidden group ">
              <Image src="/assets/cocoa-bean.png" alt="Cocoa Beans" fill className="object-fill" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent" /> */}
              <div className="absolute bottom-20 left-[60px]  z-10">
                <h3 className="font-semibold text-xl mb-1">Cocoa Beans</h3>
                <p className="text-base text-gray-200">Premium Quality</p>
              </div>
            </div>

            {/* Right Column - Cashew Nuts and Sesame Seeds Stacked */}
            <div className="flex flex-col">
              {/* Cashew Nuts Card */}
              <div className="relative h-full rounded-3xl overflow-hidden group">
                <Image
                  src="/assets/cashew-nut.png"
                  alt="Cashew Nuts"
                  fill
                  className="object-fill"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent" /> */}
                <div className="absolute bottom-20 left-10 text-left z-10">
                  <h3 className="font-semibold text-xl mb-1">Cashew Nuts</h3>
                  <p className="text-base text-gray-200">Fresh & Organic</p>
                </div>
              </div>

              {/* Sesame Seeds Card */}
              <div className="relative h-full rounded-3xl overflow-hidden group">
                <Image
                  src="/assets/sesame-seed.png"
                  alt="Sesame Seeds"
                  fill
                  className="object-fill"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent" /> */}
                <div className="absolute bottom-20 left-10 text-left z-10">
                  <h3 className="font-semibold text-xl mb-1">Sesame Seeds</h3>
                  <p className="text-base text-gray-200">Export Grade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
