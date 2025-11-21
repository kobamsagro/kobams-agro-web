'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Partner as PartnerType } from '@/payload-types'

interface PartnersSectionProps {
  partners: PartnerType[]
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  if (!partners || partners.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-4">
            Our trusted partners & investors
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {partners.map((partner) => {
            const logo = typeof partner.logo === 'object' ? partner.logo : null
            if (!logo?.url) return null

            return (
              <div
                key={partner.id}
                className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                {partner.website ? (
                  <Link
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-20"
                  >
                    <Image
                      src={logo.url}
                      alt={logo.alt || partner.name}
                      fill
                      className="object-contain"
                    />
                  </Link>
                ) : (
                  <div className="relative w-full h-20">
                    <Image
                      src={logo.url}
                      alt={logo.alt || partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
