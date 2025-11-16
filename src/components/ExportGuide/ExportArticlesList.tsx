'use client'
import React from 'react'
import Link from 'next/link'

const articles = [
  {
    id: 1,
    category: 'Agro Commodities',
    readTime: '8 min read',
    title: 'How to Prepare Agro Commodities for Export',
    description:
      'Comprehensive guide on preparing agricultural products including quality standards and packaging requirements.',
    tags: ['Quality Standards', 'Packaging', 'Storage Practices'],
  },
  {
    id: 2,
    category: 'Documentation',
    readTime: '6 min read',
    title: 'Understanding Export Quality Certificates',
    description:
      'Detailed information on quality certificates required for agricultural exports and how to obtain them.',
    tags: ['Certificates', 'Quality Assurance', 'Regulatory Process', 'International Trade'],
  },
  {
    id: 3,
    category: 'Documentation',
    readTime: '7 min read',
    title: 'Shipping Documents Every Exporter Must Know',
    description:
      'Essential documentation required for shipping agricultural products, including bill of lading and commercial invoice.',
    tags: ['Bill of Lading', 'Commercial Invoice', 'Packing List', 'Certificate of Origin'],
  },
  {
    id: 4,
    category: 'Logistics',
    readTime: '9 min read',
    title: 'Export Logistics and Supply Chain Management',
    description:
      'Best practices for managing the logistics of agricultural exports, from warehouse to destination port.',
    tags: ['Supply Chain', 'Freight Forwarding', 'Warehouse Management', 'Port Operations'],
  },
  {
    id: 5,
    category: 'Compliance',
    readTime: '8 min read',
    title: 'International Trade Practices for Exporters',
    description:
      'Guidelines on international trade practices, trade terms, and best practices for agricultural exporters.',
    tags: ['Trade Terms', 'Best Practices', 'Risk Management'],
  },
  {
    id: 6,
    category: 'Logistics',
    readTime: '5 min read',
    title: 'Market Entry Strategies for New Countries',
    description:
      'Strategic approaches to entering new international markets, from market research to establishing distribution channels.',
    tags: ['Market Research', 'Market Analysis', 'Entry Strategies', 'Distribution Channels'],
  },
]

export default function ExportArticlesList() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Export Procedures & Best Practices
            </h2>

            <div className="space-y-6">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1a4d2e] text-white rounded-lg flex items-center justify-center font-bold text-xl">
                      {article.id}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/export-guide/${article.id}`}
                        className="text-[#1a4d2e] font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-6">
            {/* Quick Navigator */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Navigator</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-[#1a4d2e] hover:underline flex items-center gap-2">
                    <span className="text-yellow-500">→</span> Export Process Steps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#1a4d2e] hover:underline flex items-center gap-2">
                    <span className="text-yellow-500">→</span> Quality Standards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#1a4d2e] hover:underline flex items-center gap-2">
                    <span className="text-yellow-500">→</span> Customs Procedures
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Card */}
            <div className="bg-[#1a4d2e] text-white rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">Need Expert Help?</h3>
              <p className="text-gray-200 text-sm mb-4">
                Our export specialists are ready to guide you through the entire export process
              </p>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#1a4d2e] font-semibold py-3 rounded-lg transition-colors">
                Talk to an Expert
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

