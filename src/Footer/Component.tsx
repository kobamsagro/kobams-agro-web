import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import Image from 'next/image'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const quickLinks = footerData?.quickLinks || []
  const legalLinks = footerData?.legalLinks || []
  const socialLinks = footerData?.socialLinks
  const contactInfo = footerData?.contactInfo

  // Fetch products from admin
  const payload = await getPayload({ config: configPromise })
  const productsData = await payload.find({
    collection: 'products',
    limit: 6,
    where: {
      status: {
        equals: 'available',
      },
    },
    sort: 'name',
  })

  return (
    <footer className="bg-[#1a4d0a] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/kobams-white.png"
                  alt="Kobams Agro"
                  width={120}
                  height={60}
                  priority
                />
              </Link>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {footerData?.description ||
                'Empowering farmers and connecting buyers across Nigeria and beyond with premium agricultural products.'}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 w-10 h-10 rounded-md flex items-center justify-center transition-colors"
              >
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(24,69,4,1)"
                  >
                    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
                  </svg>
                </button>
              </Link>

              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 w-10 h-10 rounded-md flex items-center justify-center transition-colors"
              >
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(24,69,4,1)"
                  >
                    <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path>
                  </svg>
                </button>
              </Link>

              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-black w-10 h-10 rounded-md flex items-center justify-center transition-colors"
              >
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(24,69,4,1)"
                  >
                    <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                  </svg>
                </button>
              </Link>

              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-black w-10 h-10 rounded-md flex items-center justify-center transition-colors"
              >
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(24,69,4,1)"
                  >
                    <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                href="/products"
                className="block text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                Products
              </Link>
              <Link
                href="/services"
                className="block text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="block text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                News
              </Link>
            </nav>
          </div>

          {/* Export */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Export Process</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/export-process`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm block"
                >
                  Our Export Flow
                </Link>
              </li>
              <li>
                <Link
                  href={`/export-process`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm block"
                >
                  Quality & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href={`/export-process`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm block"
                >
                  Packaging & Delivery Standards
                </Link>
              </li>
              <li>
                <Link
                  href={`/export-process`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm block"
                >
                  Shipping & Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/*Market */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Markets</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/global-markets`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm block"
                >
                  Countries Served
                </Link>
              </li>
              <li>
                <Link
                  href={`/global-markets`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm block"
                >
                  Port & Logistics Network
                </Link>
              </li>
              <li>
                <Link
                  href={`/global-markets`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm block"
                >
                  Compliance Certifications for Regions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <nav className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="rgba(225,167,43,1)"
                  >
                    <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                  </svg>
                </span>
                <span className="text-gray-300">123 Farm Road, Lagos, Nigeria-865</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="rgba(225,167,43,1)"
                  >
                    <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                  </svg>
                </span>
                <span className="text-gray-300">+1(250)8794154</span>
              </li>

              <li className="flex items-center gap-2 text-sm">
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="rgba(225,167,43,1)"
                  >
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                  </svg>
                </span>
                <span className="text-gray-300">info@kobamsagrosolutions.com</span>
              </li>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            {footerData?.copyright ||
              `© ${new Date().getFullYear()} Kobam's Agricultural Export. All rights reserved.`}
          </p>
          <div className="flex gap-4 text-sm">
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-black/80 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-black/80 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
