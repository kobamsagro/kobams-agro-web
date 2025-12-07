'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/payload-types'

interface ProductsGridProps {
  products: Product[]
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  const [filter, setFilter] = useState<string>('all')

  const filteredProducts =
    filter === 'all' ? products : products.filter((product) => product.qualityGrade === filter)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Product Range
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully selected range of agricultural products, sourced from trusted
            farmers and processed to meet international standards
          </p>
        </div>

        {/* Filter Buttons (Optional) */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              filter === 'all'
                ? 'bg-[#1a4d2e] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setFilter('premium')}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              filter === 'premium'
                ? 'bg-[#1a4d2e] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Premium
          </button>
          <button
            onClick={() => setFilter('export-grade')}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              filter === 'export-grade'
                ? 'bg-[#1a4d2e] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Export Grade
          </button>
        </div> */}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const image = typeof product.image === 'object' ? product.image : null

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gray-100">
                  {image?.url ? (
                    <Image
                      src={image.url}
                      alt={image.alt || product.name || ''}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  {/* Quality Badge */}
                  {product.qualityGrade && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-[#1a4d2e] px-3 py-1 rounded-full text-xs font-bold uppercase">
                      {product.qualityGrade.replace('-', ' ')}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  {product.botanicalName && (
                    <p className="text-sm text-gray-500 italic mb-3">{product.botanicalName}</p>
                  )}
                  <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>

                  {/* MOQ */}
                  {product.moq && (
                    <p className="text-sm text-gray-500 mb-4">
                      <span className="font-semibold">MOQ:</span> {product.moq}
                    </p>
                  )}

                  {/* View Details Button */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="block w-full bg-[#184504] hover:bg-[#2d5f3f] text-white text-center font-semibold py-3 rounded-lg transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found.</p>
          </div>
        )}
      </div>
    </section>
  )
}
