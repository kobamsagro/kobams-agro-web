'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import HeroImage from '../../../public/assets/kobams-hero.png'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/utils/animations'

// Counter component for animated numbers
function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix
      }
    })
  }, [springValue, suffix])

  return <div ref={ref} className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400" />
}

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

      <div className="container relative z-20 my-12 mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={fadeInUp}
            >
              Connecting Local <span className="text-white">#AgroProducts</span> to Global Demand
            </motion.h1>

            <motion.p className="text-white text-lg md:text-xl max-w-xl" variants={fadeInUp}>
              Explore quality agricultural products from Kobam&apos;s Agro Solutions, trusted
              suppliers for international markets.
            </motion.p>

            <motion.button
              className="bg-yellow-400 hover:bg-yellow-500 text-[#184504] font-semibold px-8 py-4 rounded-lg transition-colors"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/products">Discover Our Products </Link>
            </motion.button>

            {/* Stats */}
            <motion.div className="flex gap-4 sm:gap-8 md:gap-16 pt-8" variants={fadeInUp}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Counter value={500} suffix="+" />
                <div className="text-white text-xs sm:text-sm md:text-base">Farmers</div>
              </motion.div>
              <motion.div
                className="border-l border-white pl-4 sm:pl-8 md:pl-16"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Counter value={500} suffix="+" />
                <div className="text-white text-xs sm:text-sm md:text-base">Products</div>
              </motion.div>
              <motion.div
                className="border-l border-white pl-4 sm:pl-8 md:pl-16"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Counter value={50} suffix="+" />
                <div className="text-white text-xs sm:text-sm md:text-base">Countries</div>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* stat end */}
          {/* Right Content - Product Cards */}
          <motion.div
            className="hidden lg:relative lg:grid grid-cols-2 h-[600px]"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Cocoa Beans Card - Left Full Height */}
            <motion.div
              className="relative rounded-3xl overflow-hidden group"
              variants={slideInLeft}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image src="/assets/cocoa-bean.png" alt="Cocoa Beans" fill className="object-fill" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent" /> */}
              <div className="absolute bottom-20 left-[60px] z-10">
                <h3 className="font-semibold text-xl mb-1">Cocoa Beans</h3>
                <p className="text-base text-gray-200">Premium Quality</p>
              </div>
            </motion.div>

            {/* Right Column - Cashew Nuts and Sesame Seeds Stacked */}
            <div className="flex flex-col">
              {/* Cashew Nuts Card */}
              <motion.div
                className="relative h-full rounded-3xl overflow-hidden group"
                variants={slideInRight}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>

              {/* Sesame Seeds Card */}
              <motion.div
                className="relative h-full rounded-3xl overflow-hidden group"
                variants={slideInRight}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
