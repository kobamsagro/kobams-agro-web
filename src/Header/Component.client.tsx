'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

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
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
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
              <Link href="/about" className={getLinkClasses('/about')}>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div className="flex items-center gap-1">
                        Product{' '}
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
                      <DropdownMenuLabel>Support</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        {' '}
                        <Link href="/contact" className={getLinkClasses('/contact')}>
                          <span className="text-[16px] flex-grow text-right">Contact Us</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/contact" className={getLinkClasses('/contact')}>
                          <span className="text-[16px] flex-grow text-right">Track an order</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/contact" className={getLinkClasses('/contact')}>
                          <span className="text-[16px] flex-grow text-right">Cancel an order</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/contact" className={getLinkClasses('/contact')}>
                          <span className="text-[16px] flex-grow text-right">Return a product</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Link>
            </div>
            {/* product end */}
            {/* services start */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className={getLinkClasses('/about')}>
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
              <Link href="/about" className={getLinkClasses('/about')}>
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
                      <DropdownMenuLabel>Support</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        {' '}
                        <Link href="/contact" className={getLinkClasses('/contact')}>
                          <span className="text-[16px] flex-grow text-right">Contact Us</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/contact" className={getLinkClasses('/contact')}>
                          <span className="text-[16px] flex-grow text-right">Track an order</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/contact" className={getLinkClasses('/contact')}>
                          <span className="text-[16px] flex-grow text-right">Cancel an order</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/contact" className={getLinkClasses('/contact')}>
                          <span className="text-[16px] flex-grow text-right">Return a product</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Link>
            </div>
          </div>

          {/* button */}
          <button className="bg-[#E1A72B] text-white px-6 py-3 rounded-full hover:bg-[#184504] hover:text-white font-semibold transition-colors duration-300">
            Contact
          </button>
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
