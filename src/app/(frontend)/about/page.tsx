import type { Metadata } from 'next'
import AboutUs from '@/components/AboutUs/AboutUs'

export const metadata: Metadata = {
  title: "About Us - Kobam's Agro Solutions",
  description:
    "Learn about Kobam's Agro Solutions, our mission, vision, and commitment to connecting local agricultural products to global markets.",
}

export default function AboutPage() {
  return <AboutUs />
}
