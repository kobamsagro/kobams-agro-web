'use client'
import React from 'react'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import type { Service, Media } from '@/payload-types'

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
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-[400px] rounded-2xl overflow-hidden shadow-lg ${
                  imagePosition === 'right' ? 'lg:col-start-2' : ''
                }`}
              >
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={service.subtitle || service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}
              </div>

              {/* Content */}
              <div className={imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}>
                {service.subtitle && (
                  <div className="inline-block bg-yellow-400 text-[#1a4d2e] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {service.subtitle}
                  </div>
                )}
                <h3 className="text-3xl md:text-4xl font-bold text-[#2d4a1f] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((item, idx) => (
                      <div key={item.id || idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item.feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Stats */}
                {service.stats && service.stats.length > 0 && (
                  <div className="flex gap-8 pt-4 border-t border-gray-200">
                    {service.stats.map((stat, idx) => (
                      <div key={stat.id || idx}>
                        <div className="text-3xl font-bold text-[#1a4d2e]">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
