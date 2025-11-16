'use client'
import React from 'react'

const processSteps = [
  {
    number: 1,
    title: 'Product Preparation',
    description: 'Quality checks and packaging requirements',
  },
  {
    number: 2,
    title: 'Documentation',
    description: 'Required export documents and certificates',
  },
  {
    number: 3,
    title: 'Logistics Planning',
    description: 'Freight forwarding and shipping arrangements',
  },
  {
    number: 4,
    title: 'Customs Clearance',
    description: 'Import/export customs procedures',
  },
  {
    number: 5,
    title: 'Shipment Tracking',
    description: 'Monitor delivery and documentation',
  },
]

export default function ExportProcessOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          Export Process Overview
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Understanding the key stages of international trade
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {processSteps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1a4d2e] text-white flex items-center justify-center text-2xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
