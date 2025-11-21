'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Post, Media, Category } from '@/payload-types'

interface BlogListingProps {
  posts: Post[]
  categories: Category[]
}

export default function BlogListing({ posts, categories }: BlogListingProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter((post) =>
          post.categories?.some((cat) => {
            const category = typeof cat === 'object' ? cat : null
            return category?.id === selectedCategory
          }),
        )

  const popularPosts = posts.slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] text-white overflow-hidden bg-gradient-to-br from-[#1a4d2e]/90 to-[#2d5f3f]/90">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/blog-hero.png)',
           
          }}
        />
        <div className="container relative z-10 mx-auto my-12 px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg max-w-2xl">
            Stories, insights and innovations shaping the future of agriculture
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => {
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
                    <article
                      key={post.id}
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      {/* Image */}
                      <Link href={`/posts/${post.slug}`} className="block relative h-64">
                        {imageUrl && (
                          <Image
                            src={imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        {category && (
                          <span className="absolute top-4 left-4 bg-[#184504] text-white px-3 py-1 rounded text-xs font-semibold">
                            {category.title}
                          </span>
                        )}
                      </Link>

                      {/* Content */}
                      <div className="p-6">
                        <Link href={`/posts/${post.slug}`}>
                          <h3 className="text-lg font-bold text-[#2d4a1f] mb-2 group-hover:text-[#184504] transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                        </Link>

                        {post.meta?.description && (
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {post.meta.description}
                          </p>
                        )}

                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          {post.populatedAuthors && post.populatedAuthors.length > 0 && (
                            <span className="flex items-center gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                fill="currentColor"
                              >
                                <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                              </svg>{' '}
                              {post.populatedAuthors[0].name}
                            </span>
                          )}
                          {publishedDate && (
                            <span className="flex items-center gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                fill="currentColor"
                              >
                                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                              </svg>{' '}
                              {publishedDate}
                            </span>
                          )}
                        </div>

                        <Link
                          href={`/posts/${post.slug}`}
                          className="inline-block text-[#184504] font-semibold hover:text-[#2d4a1f] transition-colors text-sm"
                        >
                          Read More →
                        </Link>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Categories */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#2d4a1f] mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                        selectedCategory === 'all'
                          ? 'bg-[#184504] text-white'
                          : 'hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-[#184504] text-white'
                            : 'hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        {category.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#2d4a1f] mb-4">Popular Posts</h3>
                <ul className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <li key={post.id} className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <div>
                        <Link
                          href={`/posts/${post.slug}`}
                          className="font-semibold text-sm text-[#2d4a1f] hover:text-[#184504] transition-colors line-clamp-2"
                        >
                          {post.title}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-[#184504] text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-sm mb-4">
                  Get the latest updates from Kobam&apos;s delivered to your inbox
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#184504] font-semibold py-2 rounded transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
