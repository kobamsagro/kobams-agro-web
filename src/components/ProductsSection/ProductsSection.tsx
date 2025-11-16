'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Product, Media } from '@/payload-types'

interface ProductsSectionProps {
  products: Product[]
}

export default function ProductsSection({ products }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Products')

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2d4a1f] mb-8">
          Our Premium Agricultural
          <br />
          Products
        </h2>

        {/* Category Dropdown */}
        <div className="flex justify-center mb-12">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-6 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 min-w-[200px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2d4a1f]"
          >
            <option>All Products</option>
            <option>Grains & Seeds</option>
            <option>Roots & Tubers</option>
            <option>Legumes</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => {
            const imageUrl =
              typeof product.image === 'object' && product.image !== null
                ? (product.image as Media).url
                : ''

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gray-200">
                  {imageUrl && (
                    <Image src={imageUrl} alt={product.name} fill className="object-cover" />
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2d4a1f] mb-2">{product.name}</h3>
                  {product.botanicalName && (
                    <p className="text-yellow-600 text-sm italic mb-3">{product.botanicalName}</p>
                  )}
                  <p className="text-gray-600 text-sm mb-6">{product.description}</p>

                  {/* View Details Button */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="block w-full bg-[#184504] hover:bg-[#2d4a1f] text-white font-semibold py-3 rounded-lg transition-colors text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-[#184504] font-semibold px-10 py-4 rounded-lg transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
