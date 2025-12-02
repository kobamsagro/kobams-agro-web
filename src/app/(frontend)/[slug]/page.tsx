import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'
// import HeroSection from '@/components/HeroSection'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import HeroSection from '../../../components/HeroSection/HeroSection'
import ProductsSection from '../../../components/ProductsSection/ProductsSection'
import AboutSection from '../../../components/AboutSection/AboutSection'
import WhyChooseUs from '../../../components/WhyChooseUs/WhyChooseUs'
import ServicesSection from '../../../components/ServicesSection/ServicesSection'
import PartnersSection from '../../../components/PartnersSection/PartnersSection'
import TestimonialsSection from '../../../components/TestimonialsSection/TestimonialsSection'
import NewsSection from '../../../components/NewsSection/NewsSection'

// Using on-demand revalidation via hooks instead of time-based revalidation

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = 'home' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/' + decodedSlug
  let page: RequiredDataFromCollectionSlug<'pages'> | null

  page = await queryPageBySlug({
    slug: decodedSlug,
  })

  // Remove this code once your website is seeded
  if (!page && slug === 'home') {
    page = homeStatic
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  // Fetch products for the products section
  const payload = await getPayload({ config: configPromise })
  const productsData = await payload.find({
    collection: 'products',
    limit: 6,
    where: {
      status: {
        equals: 'available',
      },
    },
  })

  // Fetch partners
  const partnersData = await payload.find({
    collection: 'partners',
    limit: 12,
    where: {
      active: {
        equals: true,
      },
    },
    sort: 'order',
    depth: 2,
  })

  // Fetch testimonials
  const testimonialsData = await payload.find({
    collection: 'testimonials',
    limit: 10,
    where: {
      status: {
        equals: 'approved',
      },
    },
    sort: '-createdAt',
    depth: 2,
  })

  // Fetch latest blog posts
  const postsData = await payload.find({
    collection: 'posts',
    limit: 3,
    sort: '-publishedAt',
    depth: 2,
  })

  // Fetch services
  const servicesData = await payload.find({
    collection: 'services',
    limit: 3,
    where: {
      status: {
        equals: 'active',
      },
    },
    sort: 'order',
    depth: 2,
  })

  return (
    <>
      <HeroSection />
      <ProductsSection products={productsData.docs} />
      <ServicesSection services={servicesData.docs} />
      <AboutSection />
      <WhyChooseUs />
      <PartnersSection partners={partnersData.docs} />
      <TestimonialsSection testimonials={testimonialsData.docs} />
      <NewsSection posts={postsData.docs} />
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const page = await queryPageBySlug({
    slug: decodedSlug,
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
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
