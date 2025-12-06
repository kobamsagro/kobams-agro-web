'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Service, Media } from '@/payload-types'
import { staggerContainer, scaleIn } from '@/utils/animations'

interface ServicesSectionProps {
  services?: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  // Fallback to hardcoded data if no services provided
  const displayServices = services && services.length > 0 ? services : []
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a4d2e] mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Empowering Agriculture Through Innovation and Sustainability
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {displayServices.map((service) => {
            const imageUrl =
              typeof service.image === 'object' && service.image !== null
                ? (service.image as Media).url
                : ''

            return (
              <motion.div
                key={service.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                variants={scaleIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  {imageUrl && (
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
                      <Image
                        src={imageUrl}
                        alt={service.subtitle || service.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Icon Badge - Using a default icon since we don't have icon field in DB */}
                <div className="flex justify-center -mt-8 relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-[#184504] rounded-full flex items-center justify-center text-white shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                    </svg>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/services">
            <motion.button
              className="bg-yellow-400 hover:bg-yellow-500 text-[#1a4d2e] font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
