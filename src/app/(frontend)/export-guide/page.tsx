import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ExportGuideHero from '@/components/ExportGuide/ExportGuideHero'
import ExportProcessOverview from '@/components/ExportGuide/ExportProcessOverview'
import ExportArticlesList from '@/components/ExportGuide/ExportArticlesList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Export Guide Articles | Kobam's Agro Solutions",
  description: 'Step-by-step guidance for export processes, trade documentation, and compliance',
}

export default async function ExportGuidePage() {
  const payload = await getPayload({ config: configPromise })

  const articlesData = await payload.find({
    collection: 'export-articles',
    limit: 100,
    sort: 'order',
    where: {
      status: {
        equals: 'published',
      },
    },
    depth: 1,
  })

  return (
    <main className="min-h-screen">
      <ExportGuideHero />
      <ExportProcessOverview />
      <ExportArticlesList articles={articlesData.docs} />
    </main>
  )
}
