'use client'
import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Product, Media } from '@/payload-types'
import { fadeInUp, staggerContainer } from '@/utils/animations'

interface ProductsSectionProps {
  products: Product[]
}

const categories = [
  { label: 'All Products', value: 'all' },
  { label: 'Grains & Seeds', value: 'grains-seeds' },
  { label: 'Roots & Tubers', value: 'roots-tubers' },
  { label: 'Legumes', value: 'legumes' },
  { label: 'Nuts', value: 'nuts' },
  { label: 'Spices', value: 'spices' },
  { label: 'Other', value: 'other' },
]

export default function ProductsSection({ products }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products
    }
    return products.filter((product) => product.category === selectedCategory)
  }, [products, selectedCategory])

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#2d4a1f] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Premium Agricultural
          <br />
          Products
        </motion.h2>

        {/* Category Dropdown */}
        <div className="flex justify-center mb-12">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-6 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 min-w-[200px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2d4a1f]"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const imageUrl =
                typeof product.image === 'object' && product.image !== null
                  ? (product.image as Media).url
                  : ''

              return (
                <motion.div
                  key={product.id}
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl"
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  {/* Product Image */}
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    {imageUrl && (
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
                        <Image src={imageUrl} alt={product.name} fill className="object-cover" />
                      </motion.div>
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
                </motion.div>
              )
            })
          ) : (
            <motion.div
              className="col-span-full text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-lg">
                No products found in this category. Please try another category.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* View All Products Button */}
        <div className="flex justify-center">
          <Link
            href="/products"
            className="bg-yellow-400 hover:bg-yellow-500 text-[#184504] font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
