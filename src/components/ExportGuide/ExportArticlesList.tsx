import React from 'react'
import Link from 'next/link'
import type { ExportArticle } from '@/payload-types'

interface ExportArticlesListProps {
  articles: ExportArticle[]
}

export default function ExportArticlesList({ articles }: ExportArticlesListProps) {
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
              {articles.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p>No articles available at the moment. Check back soon!</p>
                </div>
              ) : (
                articles.map((article, index) => (
                  <article
                    key={article.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#184504] text-white rounded-lg flex items-center justify-center font-bold text-xl">
                        {index + 1}
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
                          {article.tags.map((tagObj, tagIndex) => (
                            <span
                              key={tagObj.id || tagIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {tagObj.tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`/export-guide/${article.slug}`}
                          className="text-[#184504] font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          Read Article →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-6">
            {/* Quick Navigator */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Navigator</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-[#184504] hover:underline flex items-center gap-2">
                    <span className="text-yellow-500">→</span> Export Process Steps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#184504] hover:underline flex items-center gap-2">
                    <span className="text-yellow-500">→</span> Quality Standards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#184504] hover:underline flex items-center gap-2">
                    <span className="text-yellow-500">→</span> Customs Procedures
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Card */}
            <div className="bg-[#184504] text-white rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">Need Expert Help?</h3>
              <p className="text-gray-200 text-sm mb-4">
                Our export specialists are ready to guide you through the entire export process
              </p>
              <Link href="/contact">
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#1a4d2e] font-semibold py-3 rounded-lg transition-colors">
                Talk to an Expert
              </button>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

