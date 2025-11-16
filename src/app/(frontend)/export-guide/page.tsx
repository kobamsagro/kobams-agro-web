import React from 'react'
import ExportGuideHero from '@/components/ExportGuide/ExportGuideHero'
import ExportProcessOverview from '@/components/ExportGuide/ExportProcessOverview'
import ExportArticlesList from '@/components/ExportGuide/ExportArticlesList'

export const metadata = {
  title: "Export Guide Articles | Kobam's Agro Solutions",
  description: 'Step-by-step guidance for export processes, trade documentation, and compliance',
}

export default function ExportGuidePage() {
  return (
    <main className="min-h-screen">
      <ExportGuideHero />
      <ExportProcessOverview />
      <ExportArticlesList />
    </main>
  )
}
