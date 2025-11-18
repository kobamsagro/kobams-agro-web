'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import type { Testimonial as TestimonialType } from '@/payload-types'

interface TestimonialsSectionProps {
  testimonials: TestimonialType[]
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showForm, setShowForm] = useState(false)

  const visibleTestimonials = 3
  const maxIndex = Math.max(0, testimonials.length - visibleTestimonials)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a4d2e] mb-4">
            Trusted by Farmers and Agribusinesses Across Africa
          </h2>
          <p className="text-gray-600 text-lg">Real stories from the people who grow with us</p>
        </div>

        {/* Testimonials Carousel */}
        {testimonials && testimonials.length > 0 ? (
          <div className="relative mb-12">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
              >
                {testimonials.map((testimonial) => {
                  const photo = typeof testimonial.photo === 'object' ? testimonial.photo : null

                  return (
                    <div
                      key={testimonial.id}
                      className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                    >
                      <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
                        {/* Quote Icon */}
                        <div className="text-yellow-400 text-4xl mb-4"></div>

                        {/* Profile */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                            {photo?.url ? (
                              <Image
                                src={photo.url}
                                alt={photo.alt || testimonial.name || ''}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400">
                                {testimonial.name?.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                            <p className="text-xs text-gray-500">{testimonial.location}</p>
                          </div>
                        </div>

                        {/* Rating */}
                        <StarRating rating={testimonial.rating || 5} />

                        {/* Testimonial Text */}
                        <p className="text-gray-700 mt-4 flex-grow italic">
                          {testimonial.testimonial}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            {testimonials.length > visibleTestimonials && (
              <>
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    className="w-6 h-6 text-[#1a4d2e]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    className="w-6 h-6 text-[#1a4d2e]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg mb-12">
           
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Be the First to Share!</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We&apos;d love to hear about your experience working with us. Share your story and help
              others discover the quality of our services.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-[#1a4d2e] font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
            >
              Share Your Story
            </button>
          </div>
        )}

       

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-yellow-400 hover:bg-yellow-500 text-[#1a4d2e] font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
          >
            {showForm ? 'Hide Form' : 'Share Your Story'}
          </button>
        </div>

        {/* Testimonial Form */}
        {showForm && (
          <div className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[#1a4d2e] mb-6">Share Your Experience</h3>
            <form action="/api/testimonials" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d2e] focus:border-transparent"
                    placeholder="John Ade"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Role/Title *
                  </label>
                  <input
                    type="text"
                    name="role"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d2e] focus:border-transparent"
                    placeholder="Farmer"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d2e] focus:border-transparent"
                    placeholder="Kaduna, Nigeria"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d2e] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Rating *</label>
                <select
                  name="rating"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d2e] focus:border-transparent"
                >
                  <option value="5">5 Stars - Excellent</option>
                  <option value="4">4 Stars - Very Good</option>
                  <option value="3">3 Stars - Good</option>
                  <option value="2">2 Stars - Fair</option>
                  <option value="1">1 Star - Poor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Testimonial *
                </label>
                <textarea
                  name="testimonial"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d2e] focus:border-transparent"
                  placeholder="Share your experience working with Kobam's Agro Solutions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Submit Testimonial
              </button>
              <p className="text-sm text-gray-500 text-center">
                Your testimonial will be published immediately
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
