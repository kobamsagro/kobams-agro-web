'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import type { Service, Media } from '@/payload-types'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/utils/animations'

interface ServiceDetailsProps {
  services: Service[]
}

export default function ServiceDetails({ services }: ServiceDetailsProps) {
  if (!services || services.length === 0) {
    return null
  }

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl space-y-24">
        {services.map((service) => {
          const imageUrl =
            typeof service.image === 'object' && service.image !== null
              ? (service.image as Media).url
              : ''
          const imagePosition = service.imagePosition || 'left'

          return (
            <motion.div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              {/* Image */}
              <motion.div
                className={`relative h-[400px] rounded-2xl overflow-hidden shadow-lg ${
                  imagePosition === 'right' ? 'lg:col-start-2' : ''
                }`}
                variants={imagePosition === 'right' ? slideInRight : slideInLeft}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {imageUrl && (
                  <motion.div>
                    <Image
                      src={imageUrl}
                      alt={service.subtitle || service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                )}
              </motion.div>

              {/* Content */}
              <motion.div
                className={imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}
                variants={imagePosition === 'right' ? slideInLeft : slideInRight}
              >
                {service.subtitle && (
                  <motion.div
                    className="inline-block bg-yellow-400 text-[#1a4d2e] px-4 py-1 rounded-full text-sm font-semibold mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.subtitle}
                  </motion.div>
                )}
                <h3 className="text-3xl md:text-4xl font-bold text-[#2d4a1f] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <motion.div
                    className="grid grid-cols-2 gap-3 mb-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    {service.features.map((item, idx) => (
                      <motion.div
                        key={item.id || idx}
                        className="flex items-start gap-2"
                        variants={fadeInUp}
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item.feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Stats */}
                {service.stats && service.stats.length > 0 && (
                  <motion.div
                    className="flex gap-8 pt-4 border-t border-gray-200"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    {service.stats.map((stat, idx) => (
                      <motion.div
                        key={stat.id || idx}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-3xl font-bold text-[#1a4d2e]">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
