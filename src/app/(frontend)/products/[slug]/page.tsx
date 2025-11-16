import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { cache } from 'react'
import { notFound } from 'next/navigation'
import ProductDetail from '@/components/ProductDetail/ProductDetail'
import { generateMeta } from '@/utilities/generateMeta'

type Args = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const products = await payload.find({
    collection: 'products',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return products.docs?.map(({ slug }) => ({ slug })) || []
}

export default async function ProductPage({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const product = await queryProductBySlug({ slug })

  if (!product) {
    return notFound()
  }

  // Fetch related products
  const payload = await getPayload({ config: configPromise })
  const relatedProducts = await payload.find({
    collection: 'products',
    limit: 3,
    where: {
      slug: {
        not_equals: slug,
      },
      status: {
        equals: 'available',
      },
    },
  })

  return <ProductDetail product={product} relatedProducts={relatedProducts.docs} />
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise
  const product = await queryProductBySlug({ slug })

  return {
    title: product?.name || 'Product',
    description: product?.description || '',
  }
}

const queryProductBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'products',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
