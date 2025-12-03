'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Product, Media } from '@/payload-types'
import RequestQuoteDialog from './RequestQuoteDialog'
import InquiryDialog from './InquiryDialog'
import HighlightDetailModal from './HighlightDetailModal'

interface ProductDetailProps {
  product: Product
  relatedProducts: Product[]
}

interface HighlightDetail {
  title: string
  description: string
  benefits: string[]
  additionalInfo?: string
}

export default function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)
  const [isInquiryDialogOpen, setIsInquiryDialogOpen] = useState(false)
  const [selectedHighlight, setSelectedHighlight] = useState<HighlightDetail | null>(null)
  const [isHighlightModalOpen, setIsHighlightModalOpen] = useState(false)

  // Transform product highlights from CMS to component format
  const productHighlights: HighlightDetail[] =
    (
      product as Product & {
        highlights?: Array<{
          title: string
          description: string
          benefits?: Array<{ benefit: string }>
          additionalInfo?: string
        }>
      }
    ).highlights?.map((highlight) => ({
      title: highlight.title,
      description: highlight.description,
      benefits: highlight.benefits?.map((b) => b.benefit) || [],
      additionalInfo: highlight.additionalInfo || undefined,
    })) || []

  const handleHighlightClick = (highlight: HighlightDetail) => {
    setSelectedHighlight(highlight)
    setIsHighlightModalOpen(true)
  }

  const imageUrl =
    typeof product.image === 'object' && product.image !== null ? (product.image as Media).url : ''

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#184504] text-white py-32">
        <div className="container mx-auto my-12 px-6">
          {/* Breadcrumb */}
          <div className="">
            <div className="container mx-auto px-6">
              <div className="flex items-center gap-2 text-sm text-white">
                <Link href="/" className="hover:text-black">
                  Home
                </Link>
                <span>/</span>
                <Link href="/#products" className="hover:text-black">
                  Products
                </Link>
                <span>/</span>
                <span className="text-yellow-600">{product.name}</span>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
              {product.botanicalName && (
                <p className="text-yellow-400 text-xl italic mb-6">{product.botanicalName}</p>
              )}
              <p className="text-lg mb-8">{product.description}</p>
              {/* {product.status === 'available' && (
                <span className="inline-block bg-yellow-400 text-[#184504] px-6 py-2 rounded-full font-semibold">
                  Available
                </span>
              )} */}
            </div>

            {/* Right Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden">
              {imageUrl && (
                <Image src={imageUrl} alt={product.name} fill className="object-cover" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      {productHighlights.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-8">Product Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {productHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleHighlightClick(highlight)}
                >
                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#2d4a1f] mb-2">{highlight.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">{highlight.description}</p>

                  {/* CTA */}
                  <button className="flex items-center gap-2 text-[#184504] hover:text-[#2d4a1f] font-medium text-sm transition-colors">
                    Click for details
                    <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quality Specifications */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-8 flex items-center gap-2">
              <span className="text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  fill="rgba(255,203,5,1)"
                >
                  <path d="M21 15L15 20.996L4.00221 21C3.4487 21 3 20.5551 3 20.0066V3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.45576 21 4.00247V15ZM19 5H5V19H13V14C13 13.4872 13.386 13.0645 13.8834 13.0067L14 13L19 12.999V5ZM18.171 14.999L15 15V18.169L18.171 14.999Z"></path>
                </svg>
              </span>{' '}
              Quality Specifications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {product.specifications.map((spec, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <p className="text-gray-600 text-sm mb-2">{spec.attribute}</p>
                  <p className="text-[#184504] font-bold text-lg">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Packaging Options */}
      {product.packagingOptions && product.packagingOptions.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-8">Packaging Options</h2>
            <p className="text-gray-600 mb-8">
              Tailored packaging for international export standards
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {product.packagingOptions.map((pkg, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                      fill="rgba(255,203,5,1)"
                    >
                      <path d="M3 10H2V4.00293C2 3.44903 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.43788 22 4.00293V10H21V20.0015C21 20.553 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5525 3 20.0015V10ZM19 10H5V19H19V10ZM4 5V8H20V5H4ZM9 12H15V14H9V12Z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{pkg.type}</h3>
                  {pkg.weight && <p className="text-gray-600 mb-2">{pkg.weight}</p>}
                  {pkg.description && <p className="text-sm text-gray-500">{pkg.description}</p>}
                </div>
              ))}
            </div>

            {/* Packaging Process */}
            {(product as Product & { packagingProcess?: string }).packagingProcess && (
              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-[#2d4a1f] mb-3 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"></path>
                  </svg>
                  Packaging Process
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {(product as Product & { packagingProcess?: string }).packagingProcess}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Export Markets */}
      {product.exportMarkets && product.exportMarkets.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-8 flex items-center gap-2">
              <span className="text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="rgba(255,203,5,1)"
                >
                  <path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path>
                </svg>
              </span>{' '}
              Export Markets
            </h2>
            <p className="text-gray-600 mb-8">
              Global trusted export service with consistent supply
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {product.exportMarkets.map((market, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  {/* <div className="text-3xl mb-2">Flag</div> */}
                  <p className="font-semibold text-[#184504]">{market.country}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Minimum Order Quantity */}
      <section className="py-16 bg-[#184504] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-5xl mb-4"></div>
            <h2 className="text-3xl font-bold mb-4">Minimum Order Quantity</h2>
            <p className="text-5xl font-bold text-yellow-400 mb-6">{product.moq}</p>
            <p className="text-lg mb-8">Competitive pricing for bulk orders</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#2d4a1f] mb-4">Ready to Place Your Order?</h2>
          <p className="text-gray-600 mb-8">
            Get competitive pricing and reliable delivery for bulk orders
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setIsQuoteDialogOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-[#184504] font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Request a Quote
            </button>
            <button
              onClick={() => setIsInquiryDialogOpen(true)}
              className="bg-[#184504] hover:bg-[#2d4a1f] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Make an Enquiry
            </button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-8">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => {
                const relatedImageUrl =
                  typeof relatedProduct.image === 'object' && relatedProduct.image !== null
                    ? (relatedProduct.image as Media).url
                    : ''

                return (
                  <div
                    key={relatedProduct.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-64 bg-gray-200">
                      {relatedImageUrl && (
                        <Image
                          src={relatedImageUrl}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#2d4a1f] mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                      <Link
                        href={`/products/${relatedProduct.slug}`}
                        className="block w-full bg-[#184504] hover:bg-[#2d4a1f] text-white font-semibold py-3 rounded-lg transition-colors text-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Dialogs */}
      <RequestQuoteDialog
        isOpen={isQuoteDialogOpen}
        onClose={() => setIsQuoteDialogOpen(false)}
        productName={product.name}
        minQuantity={product.moq}
      />
      <InquiryDialog
        isOpen={isInquiryDialogOpen}
        onClose={() => setIsInquiryDialogOpen(false)}
        productName={product.name}
      />
      <HighlightDetailModal
        isOpen={isHighlightModalOpen}
        onClose={() => setIsHighlightModalOpen(false)}
        highlight={selectedHighlight}
      />
    </div>
  )
}
