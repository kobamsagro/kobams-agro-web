import React from 'react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const ExportProcessContent = dynamic(
  () => import('@/components/ExportProcess/ExportProcessContent'),
  { ssr: true },
)

export const metadata: Metadata = {
  title: "Export Process | Kobam's Agro Solutions",
  description:
    "Learn about our comprehensive export process from quality control to delivery. Kobam's Agro Solutions ensures seamless international trade.",
}

export default function ExportProcessPage() {
  return <ExportProcessContent />
}
