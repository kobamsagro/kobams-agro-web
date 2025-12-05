'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header, Product } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

interface HeaderClientProps {
  data: Header
  products?: Product[]
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, products = [] }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const isMobile = useMediaQuery('(max-width: 640px)')
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)')
  const isDesktop = useMediaQuery('(min-width: 1025px)')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-transparent py-5`

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href
    const baseClasses = `hover:text-black transition-colors duration-300 text-lg font-medium`
    const activeClasses = isActive
      ? isScrolled
        ? 'text-[#222222] font-bold'
        : 'text-[#184504] font-bold'
      : ''
    const scrollClasses = isScrolled
      ? 'text-black hover:text-[#FFCB05] font-semibold'
      : 'text-[#184504]'
    return `${baseClasses} ${isActive ? activeClasses : scrollClasses}`
  }

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className={headerClasses}>
      {/* Mobile Header */}
      {(isMobile || isTablet) && (
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-full shadow-lg border-2 border-[#184504] px-6 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/kobams-logo.png"
                alt="Kobams Agro"
                width={120}
                height={60}
                priority
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-12 h-12 rounded-full border-2 border-[#184504] flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-[#184504]"
                >
                  <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-[#184504]"
                >
                  <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="bg-white mt-4 rounded-2xl shadow-lg border border-gray-200 py-6 px-6">
              <nav className="space-y-6">
                {/* Products with submenu */}
                <div>
                  <button
                    onClick={() => {
                      const submenu = document.getElementById('mobile-products-submenu')
                      if (submenu) {
                        submenu.classList.toggle('hidden')
                      }
                    }}
                    className="flex items-center justify-between w-full text-[#184504] font-semibold text-lg"
                  >
                    Products
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </button>
                  <div id="mobile-products-submenu" className="hidden mt-3 ml-4 space-y-3">
                    {products && products.length > 0 ? (
                      products.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          className="block text-gray-600 hover:text-[#184504]"
                        >
                          {product.name}
                        </Link>
                      ))
                    ) : (
                      <span className="text-gray-400 text-sm">No products available</span>
                    )}
                  </div>
                </div>

                {/* Services */}
                <Link
                  href="/services"
                  className="block text-[#184504] font-semibold text-lg hover:text-[#2d4a1f]"
                >
                  Services
                </Link>

                {/* About Us */}
                <Link
                  href="/about"
                  className="block text-[#184504] font-semibold text-lg hover:text-[#2d4a1f]"
                >
                  About Us
                </Link>

                

                {/* Resources with submenu */}
                <div>
                  <button
                    onClick={() => {
                      const submenu = document.getElementById('mobile-resources-submenu')
                      if (submenu) {
                        submenu.classList.toggle('hidden')
                      }
                    }}
                    className="flex items-center justify-between w-full text-[#184504] font-semibold text-lg"
                  >
                    Resources
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </button>
                  <div id="mobile-resources-submenu" className="hidden mt-3 ml-4 space-y-3">
                    <Link href="/export-guide" className="block text-gray-600 hover:text-[#184504]">
                      Export Guide
                    </Link>
                    <Link href="/blog" className="block text-gray-600 hover:text-[#184504]">
                      News
                    </Link>
                    <Link href="/faq" className="block text-gray-600 hover:text-[#184504]">
                      FAQ
                    </Link>
                  </div>
                </div>
              </nav>

              {/* Contact Button */}
              <Link href="/contact" className="block mt-8">
                <button className="w-full bg-[#E1A72B] text-white px-6 py-4 rounded-full hover:bg-[#184504] font-semibold transition-colors duration-300">
                  Contact
                </button>
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Desktop Header */}
      {isDesktop && (
        <div className="container rounded-3xl mx-auto my-4 px-4 py-4 flex justify-between items-center bg-white shadow-lg border border-[#184504]">
          <Link href="/" className="flex items-center">
            {isScrolled ? (
              <Image
                src="/assets/kobams-logo.png"
                alt="Kobams Agro"
                width={150}
                height={85}
                priority
              />
            ) : (
              <Image
                src="/assets/kobams-logo.png"
                alt="Kobams Agro"
                width={150}
                height={85}
                priority
              />
            )}
          </Link>
          <div className="flex gap-8">
            {/* product start */}

            <div className="hidden md:flex items-center  space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger className={getLinkClasses('/products')}>
                  <div className="flex items-center gap-1">
                    Products{' '}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                      </svg>
                    </span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-h-[400px] overflow-y-auto">
                  <DropdownMenuItem>
                    <Link href="/products" className="w-full">
                      <span className="text-[16px] font-semibold">View All Products</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {products && products.length > 0 ? (
                    products.map((product) => (
                      <DropdownMenuItem key={product.id}>
                        <Link href={`/products/${product.slug}`} className="w-full">
                          <span className="text-[16px]">{product.name}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))
                  ) : (
                    <DropdownMenuItem disabled>
                      <span className="text-[14px] text-gray-500">No products available</span>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {/* product end */}
            {/* services start */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className={getLinkClasses('/services')}>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">Services </div>
                </div>
              </Link>
            </div>
            {/* services end */}
            {/* about us */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className={getLinkClasses('/about')}>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">About Us </div>
                </div>
              </Link>
            </div>
            {/* about us end */}
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={getLinkClasses('/')}>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div className="flex items-center gap-1">
                        Resources{' '}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="currentColor"
                          >
                            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                          </svg>
                        </span>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        {' '}
                        <Link href="/export-guide" className={getLinkClasses('/export-guide')}>
                          <span className="text-[16px] flex-grow text-right">Export Guide</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/blog" className={getLinkClasses('/blog')}>
                          <span className="text-[16px] flex-grow text-right">News</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/faq" className={getLinkClasses('/faq')}>
                          <span className="text-[16px] flex-grow text-right">FAQ</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Link>
            </div>
          </div>

          {/* button */}
          <Link href="/contact">
            <button className="bg-[#E1A72B] text-white px-6 py-3 rounded-full hover:bg-[#184504] hover:text-white font-semibold transition-colors duration-300">
              Contact
            </button>
          </Link>
        </div>
      )}
      {/* <div className="py-8 flex justify-between">
        <Link href="/">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>
        <HeaderNav data={data} />
      </div> */}
    </header>
  )
}
