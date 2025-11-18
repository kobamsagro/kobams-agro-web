'use client'
import React from 'react'
import Link from 'next/link'

const reports = [
  {
    category: 'Market Analysis',
    date: 'December 2024',
    title: 'Top 5 Export Destinations for 2025',
    description:
      'Analysis of emerging markets and growing demand for Nigerian agricultural products in key export destinations.',
    downloadDate: 'December 2024',
  },
  {
    category: 'Price Forecast',
    date: 'January 2025',
    title: 'Price Forecast for Soya Beans',
    description:
      'Comprehensive price projections for the next 12 months based on global supply and demand trends.',
    downloadDate: 'December 2024',
  },
  {
    category: 'Market Trends',
    date: 'November 2024',
    title: 'Sesame Seeds: The Golden Opportunity',
    description:
      'Why sesame seeds represent the biggest export opportunity for Nigerian farmers in 2025.',
    downloadDate: 'November 2024',
  },
  {
    category: 'Industry Report',
    date: 'October 2024',
    title: 'Climate Impact on Agricultural Exports',
    description:
      'How changing weather patterns are affecting crop yields and export strategies across West Africa.',
    downloadDate: 'November 2024',
  },
]

export default function MarketReports() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Trends & Reports</h2>
          <p className="text-gray-600">Latest insights and analysis from our research team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reports.map((report, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1 bg-[#1a4d2e] text-white text-xs font-bold rounded-full">
                  {report.category}
                </span>
                <span className="text-sm text-gray-500">{report.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{report.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">{report.description}</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">Download: {report.downloadDate}</span>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#1a4d2e] font-semibold hover:underline"
                >
                  Read Report
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reports Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            View All Reports
          </Link>
        </div>
      </div>
    </section>
  )
}
