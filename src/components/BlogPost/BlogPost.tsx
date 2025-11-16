'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Post, Media, Category } from '@/payload-types'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

interface BlogPostProps {
  post: Post
  relatedPosts: Post[]
}

export default function BlogPost({ post, relatedPosts }: BlogPostProps) {
  const imageUrl =
    typeof post.heroImage === 'object' && post.heroImage !== null
      ? (post.heroImage as Media).url
      : ''

  const category =
    post.categories && post.categories.length > 0
      ? typeof post.categories[0] === 'object'
        ? (post.categories[0] as Category)
        : null
      : null

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : ''

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#184504]">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#184504]">
              Blog
            </Link>
            <span>/</span>
            <span className="text-yellow-600">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          {category && (
            <span className="inline-block bg-[#184504] text-white px-4 py-1 rounded-full text-sm mb-4">
              {category.title}
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-[#2d4a1f] mb-6">{post.title}</h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            {post.populatedAuthors && post.populatedAuthors.length > 0 && (
              <span className="flex items-center gap-2">
                <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  👤
                </span>
                <span className="font-semibold">{post.populatedAuthors[0].name}</span>
              </span>
            )}
            {publishedDate && <span className="flex items-center gap-1">🕒 {publishedDate}</span>}
          </div>

          {imageUrl && (
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
              <Image src={imageUrl} alt={post.title} fill className="object-cover" />
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Rich text content would be rendered here */}
            <div className="text-gray-700 leading-relaxed space-y-4">
              {post.meta?.description && <p className="text-xl">{post.meta.description}</p>}
              {/* The actual rich text content from Lexical editor would be rendered here */}
              {/* You'll need to use the Lexical serializer to render the content */}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-8">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => {
                const relatedImageUrl =
                  typeof relatedPost.heroImage === 'object' && relatedPost.heroImage !== null
                    ? (relatedPost.heroImage as Media).url
                    : ''

                const relatedCategory =
                  relatedPost.categories && relatedPost.categories.length > 0
                    ? typeof relatedPost.categories[0] === 'object'
                      ? (relatedPost.categories[0] as Category)
                      : null
                    : null

                return (
                  <article key={relatedPost.id} className="group">
                    <Link href={`/blog/${relatedPost.slug}`} className="block relative h-48 mb-4">
                      {relatedImageUrl && (
                        <Image
                          src={relatedImageUrl}
                          alt={relatedPost.title}
                          fill
                          className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      {relatedCategory && (
                        <span className="absolute top-4 left-4 bg-[#184504] text-white px-4 py-1 rounded-full text-sm">
                          {relatedCategory.title}
                        </span>
                      )}
                    </Link>

                    <Link href={`/blog/${relatedPost.slug}`}>
                      <h3 className="text-lg font-bold text-[#2d4a1f] mb-2 group-hover:text-[#184504] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </Link>

                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="inline-block text-[#184504] font-semibold hover:text-[#2d4a1f] transition-colors text-sm"
                    >
                      Read More →
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-[#184504] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get the latest updates from Kobam&apos;s delivered to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-[#184504] font-semibold px-8 py-3 rounded transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
