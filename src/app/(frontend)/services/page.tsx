import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import ServicesHero from '@/components/Services/ServicesHero'
import ServiceDetails from '@/components/Services/ServiceDetails'
import ServicesCTA from '@/components/Services/ServicesCTA'

export const metadata: Metadata = {
  title: "Our Services | Kobam's Agro Solutions",
  description: 'Empowering Agriculture Through Innovation & Global Trade',
}

export const revalidate = 0 // Disable caching for immediate updates

export default async function ServicesPage() {
  const payload = await getPayload({ config })

  const { docs: services } = await payload.find({
    collection: 'services',
    where: {
      status: {
        equals: 'active',
      },
    },
    sort: 'order',
    limit: 100,
  })

  return (
    <main className="min-h-screen">
      <ServicesHero />
      {/* Header */}
      <div className="text-center my-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d4a1f] mb-4">Our Core Services</h2>
        <p className="text-[#2d4a1f] max-w-2xl mx-auto">
          Explore our comprehensive agricultural solutions in detail
        </p>
      </div>
      <ServiceDetails services={services} />
      <ServicesCTA />
    </main>
  )
}
