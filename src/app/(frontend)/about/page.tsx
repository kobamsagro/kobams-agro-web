import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import AboutUs from '@/components/AboutUs/AboutUs'

export const metadata: Metadata = {
  title: "About Us - Kobam's Agro Solutions",
  description:
    "Learn about Kobam's Agro Solutions, our mission, vision, and commitment to connecting local agricultural products to global markets.",
}

export default async function AboutPage() {
  const payload = await getPayload({ config: configPromise })

  const teamData = await payload.find({
    collection: 'team-members',
    limit: 100,
    sort: 'order',
    where: {
      status: {
        equals: 'active',
      },
    },
    depth: 1,
  })

  return <AboutUs teamMembers={teamData.docs} />
}
