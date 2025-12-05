import React from 'react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const GlobalMarketsContent = dynamic(
  () => import('@/components/GlobalMarkets/GlobalMarketsContent'),
  { ssr: true },
)

export const metadata: Metadata = {
  title: "Global Markets | Kobam's Agro Solutions",
  description:
    "Discover the countries we serve and our expansion targets. Kobam's Agro Solutions connects African agricultural products to global markets.",
}

export default function GlobalMarketsPage() {
  return <GlobalMarketsContent />
}
