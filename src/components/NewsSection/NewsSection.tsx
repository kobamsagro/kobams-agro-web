'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/payload-types'

interface NewsSectionProps {
  posts: Post[]
}

export default function NewsSection({ posts }: NewsSectionProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest News & Articles</h2>
          <Link
            href="/blog"
            className="bg-yellow-400 hover:bg-yellow-500 text-[#1a4d2e] font-semibold px-2 py-2 lg:px-6 lg:py-3 rounded-lg transition-colors"
          >
            See More News
          </Link>
        </div>

        {/* News Grid */}
        {posts && posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => {
              const image = typeof post.meta?.image === 'object' ? post.meta.image : null
              const category =
                post.categories && post.categories.length > 0
                  ? typeof post.categories[0] === 'object'
                    ? post.categories[0].title
                    : null
                  : null

              return (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-gray-100">
                    {image?.url ? (
                      <Image
                        src={image.url}
                        alt={image.alt || post.title || ''}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                    {/* Category Badge */}
                    {category && (
                      <div className="absolute top-4 left-4 bg-yellow-400 text-[#1a4d2e] px-4 py-2 rounded-full text-sm font-bold">
                        {category}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{formatDate(post.publishedAt || post.createdAt || '')}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.meta?.description || 'Read more about this article...'}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={`/posts/${post.slug}`}
                      className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-600 font-semibold transition-colors"
                    >
                      Read More
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Articles Yet</h3>
            <p className="text-gray-500 mb-6">
              Check back soon for the latest news and insights from the agricultural industry
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
