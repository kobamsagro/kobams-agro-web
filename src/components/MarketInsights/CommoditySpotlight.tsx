'use client'
import React from 'react'

const commodities = [
  {
    name: 'Sorghum',
    price: '$285/MT',
    change: '+3.2%',
    isPositive: true,
    lastWeek: '$276/MT',
    thisWeek: '$285/MT',
  },
  {
    name: 'Sesame Seeds',
    price: '$1,850/MT',
    change: '+4.5%',
    isPositive: true,
    lastWeek: '$1,770/MT',
    thisWeek: '$1,850/MT',
  },
  {
    name: 'Soybeans',
    price: '$420/MT',
    change: '-2.1%',
    isPositive: false,
    lastWeek: '$429/MT',
    thisWeek: '$420/MT',
  },
  {
    name: 'Ginger',
    price: '$2,100/MT',
    change: '+8.3%',
    isPositive: true,
    lastWeek: '$1,939/MT',
    thisWeek: '$2,100/MT',
  },
]

export default function CommoditySpotlight() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Commodity Spotlight</h2>
          <p className="text-gray-600">Current market performance of our featured exports</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {commodities.map((commodity, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              {/* Change Badge */}
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`px-3 py-1 rounded-full text-sm font-bold ${
                    commodity.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {commodity.change}
                </div>
                <div className="w-10 h-10 bg-[#1a4d2e] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>

              {/* Commodity Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{commodity.name}</h3>
              <div className="text-2xl font-bold text-[#1a4d2e] mb-4">{commodity.price}</div>

              {/* Price Comparison */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Last Week:</span>
                  <span className="font-semibold text-gray-700">{commodity.lastWeek}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">This Week:</span>
                  <span
                    className={`font-semibold ${commodity.isPositive ? 'text-green-600' : 'text-red-600'}`}
                  >
                    {commodity.thisWeek}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
