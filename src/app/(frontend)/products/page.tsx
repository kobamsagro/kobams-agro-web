import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ProductsHero from '../../../components/Products/ProductsHero'
import ProductsGrid from '../../../components/Products/ProductsGrid'
import ProductsCTA from '../../../components/Products/ProductsCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Premium Agricultural Products | Kobam's Agro Solutions",
  description:
    'Discover world-class agricultural products including cocoa beans, cashew nuts, sesame seeds, and more. Export-grade quality from Nigeria.',
}

export default async function ProductsPage() {
  const payload = await getPayload({ config: configPromise })

  const productsData = await payload.find({
    collection: 'products',
    limit: 100,
    sort: '-createdAt',
    depth: 2,
  })

  return (
    <main className="min-h-screen">
      <ProductsHero />
      <ProductsGrid products={productsData.docs} />
      <ProductsCTA />
    </main>
  )
}
