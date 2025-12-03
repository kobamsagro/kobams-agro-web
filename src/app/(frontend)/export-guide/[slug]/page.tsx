import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import RichText from '@/components/RichText'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'export-articles',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const article = result.docs[0]

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | Kobam's Agro Solutions`,
    description: article.description,
  }
}

export default async function ExportArticlePage({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'export-articles',
    where: {
      slug: {
        equals: slug,
      },
      status: {
        equals: 'published',
      },
    },
    limit: 1,
  })

  const article = result.docs[0]

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
       <section className="bg-[#184504] text-white py-32">
        <div className="container mx-auto my-12 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Export Article</h1>
         
        </div>
      </section>
      <div className="container mx-auto px-6 py-16">
        <Link
          href="/export-guide"
          className="inline-flex items-center text-[#184504] hover:underline mb-8"
        >
          ← Back to Export Guide
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
            <p className="text-gray-600 text-lg mb-4">{article.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tagObj: any, index: number) => (
              <span
                key={tagObj.id || index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {tagObj.tag}
              </span>
            ))}
          </div>

          {article.content && (
            <RichText data={article.content} enableGutter={false} className="prose-lg" />
          )}

          {!article.content && (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600">
                Full article content coming soon. For more information, please contact our export
                specialists.
              </p>
              <button className="mt-4 bg-[#184504] hover:bg-[#1a5505] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Talk to an Expert
              </button>
            </div>
          )}
        </article>
      </div>
    </main>
  )
}
