import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import BlogListing from '@/components/BlogListing/BlogListing'

export const metadata: Metadata = {
  title: "Blog - Kobam's Agro Solutions",
  description:
    'Stories, insights and innovations shaping the future of agriculture. Read our latest articles on farming, export, and sustainable agriculture.',
}

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise })

  const [postsData, categoriesData] = await Promise.all([
    payload.find({
      collection: 'posts',
      limit: 100,
      where: {
        _status: {
          equals: 'published',
        },
      },
      sort: '-publishedAt',
    }),
    payload.find({
      collection: 'categories',
      limit: 100,
    }),
  ])

  return <BlogListing posts={postsData.docs} categories={categoriesData.docs} />
}
