import React from 'react'
import type { Metadata } from 'next'
import MarketOverview from '@/components/MarketInsights/MarketOverview'
import CommoditySpotlight from '@/components/MarketInsights/CommoditySpotlight'
import MarketReports from '@/components/MarketInsights/MarketReports'

export const metadata: Metadata = {
  title: "Agro Market Insights | Kobam's Agro Solutions",
  description: 'Real-time data, commodity price trends and export performance reports.',
}

export default function MarketInsightsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] text-white py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Agro Market Insights</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Real-time data, commodity price trends and export performance reports
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <MarketOverview />

      {/* Commodity Spotlight */}
      <CommoditySpotlight />

      {/* Market Trends & Reports */}
      <MarketReports />
    </main>
  )
}
