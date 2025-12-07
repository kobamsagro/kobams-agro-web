'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import { RequestQuoteDialog } from '../RequestQuoteDialog/RequestQuoteDialog'

export default function GlobalMarketsContent() {
  const countriesServed = {
    africa: ['Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Egypt'],
    europe: ['Germany', 'Netherlands', 'United Kingdom', 'France', 'Spain'],
    asia: ['China', 'India', 'Japan', 'UAE', 'Singapore'],
  }

  const expansionTargets = [
    {
      title: 'Organic Produce Markets in Europe',
      description: 'Targeting premium organic markets in UK, Scandinavia and Central Europe.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(24,69,4,1)"
        >
          <path d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L5.24077 18.9999C5.0786 19.912 4.99805 20.907 4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3ZM12.998 5C8.57977 5 4.99805 8.58172 4.99805 13C4.99805 13.3624 5.00125 13.7111 5.00759 14.0459C6.26198 12.0684 8.09902 10.5048 10.5019 9.13176L11.4942 10.8682C8.6393 12.4996 6.74554 14.3535 5.77329 16.9998L8.99805 17C15.0132 17 18.8692 13.0269 18.9949 5.38766C17.6229 5.52113 16.3481 5.436 14.7754 5.20009C13.6243 5.02742 13.3988 5 12.998 5Z"></path>
        </svg>
      ),
    },
    {
      title: 'Specialty Markets in North America',
      description: 'Expanding into USA and Canada with specialty African produce and superfoods.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(24,69,4,1)"
        >
          <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
        </svg>
      ),
    },
  ]

  const portsLogistics = {
    africa: ['Air Freight', 'Express Delivery', 'Temperature', 'Real-time Tracking'],
    europe: ['Sea Freight', 'Container', 'Cold Chain', 'Port to Port Service'],
    asia: ['Last-Mile Delivery', 'Customs Clearance', 'Warehousing', 'Distribution'],
  }

  const regionalHubs = [
    {
      title: 'Major Seaports',
      description: `Lagos Port Complex Tin Can Island Apapa Port - Nigeria&apos;s primary export gateways.`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(24,69,4,1)"
        >
          <path d="M13 9.87398V19.928C16.6187 19.4745 19.4869 16.5923 19.9381 12.9558H17L20.7042 7C21.529 8.46132 22 10.1508 22 11.9509C22 17.5009 17.5228 22 12 22C6.47715 22 2 17.5009 2 11.9509C2 10.1508 2.47097 8.46132 3.29582 7L7 12.9558H4.06189C4.51314 16.5923 7.38128 19.4745 11 19.928V9.87398C9.27477 9.42994 8 7.86384 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6C16 7.86384 14.7252 9.42994 13 9.87398ZM12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z"></path>
        </svg>
      ),
    },
    {
      title: 'Air Cargo Hubs',
      description: 'Murtala Muhammed International Airport - Fast track for perishable goods.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(24,69,4,1)"
        >
          <path d="M21.949 10.1118C22.1634 10.912 21.6886 11.7345 20.8884 11.9489L5.2218 16.1467C4.77856 16.2655 4.31138 16.0674 4.08866 15.6662L1.46582 10.9415L2.91471 10.5533L5.3825 12.9979L10.4778 11.6326L5.96728 4.55896L7.89913 4.04132L14.8505 10.4609L20.1119 9.05113C20.9121 8.83671 21.7346 9.31159 21.949 10.1118ZM4.00013 19H20.0001V21H4.00013V19Z"></path>
        </svg>
      ),
    },
    {
      title: 'Regional Distribution Centers',
      description:
        'Strategic warehouses in Lagos, Kano and Port Harcourt for efficient distribution.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(24,69,4,1)"
        >
          <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
        </svg>
      ),
    },
  ]

  const shippingBenefits = [
    {
      title: 'Reliable Shipping',
      description:
        'We partner with trusted shipping lines to ensure timely and safe delivery of products.',
    },
    {
      title: 'Cold Chain Logistics',
      description:
        'Temperature-controlled storage and transportation for perishable agricultural products.',
    },
    {
      title: 'Real-time Tracking',
      description:
        'Track your shipment from origin to destination with our advanced logistics system.',
    },
  ]

  const complianceCertifications = [
    {
      region: 'Europe, North America, Middle East & Africa',
      certifications: [
        { name: 'ISO 22000', description: 'Food Safety' },
        { name: 'EQC', description: 'Export Quality Compliance' },
        { name: 'GAP', description: 'Good Agricultural Practice' },
        { name: 'SFI', description: 'Sustainable Farming Initiative ' },
      ],
    },
  ]
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] text-white overflow-hidden">
        <Image
          src="/assets/global-market-hero.png"
          alt="Global Markets"
          fill
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
        <motion.div
          className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center items-center text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={fadeInUp}>
            Global Markets
          </motion.h1>
          <motion.p className="text-lg max-w-2xl" variants={fadeInUp}>
            Kobam&apos;s Agro Solutions serves global markets with a growing network of logistics
            and compliance partners.
          </motion.p>
        </motion.div>
      </section>

      {/* Countries Served */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-4">Countries Served</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver top-quality agricultural products to major markets across three continents
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Africa */}
            <motion.div
              className="bg-[#FAF8F3] border border-gray-200 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-[#184504] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#2d4a1f] mb-4">Africa</h3>
              <ul className="space-y-2">
                {countriesServed.africa.map((country) => (
                  <li key={country} className="text-gray-600 flex items-center gap-2">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.4571 9.45711L16.0429 8.04289L11 13.0858L8.20711 10.2929L6.79289 11.7071L11 15.9142L17.4571 9.45711Z"></path>
                      </svg>
                    </span>{' '}
                    {country}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Europe */}
            <motion.div
              className="bg-[#FAF8F3] border border-gray-200 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-[#184504] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path>
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#2d4a1f] mb-4">Europe</h3>
              <ul className="space-y-2">
                {countriesServed.europe.map((country) => (
                  <li key={country} className="text-gray-600 flex items-center gap-2">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.4571 9.45711L16.0429 8.04289L11 13.0858L8.20711 10.2929L6.79289 11.7071L11 15.9142L17.4571 9.45711Z"></path>
                      </svg>
                    </span>{' '}
                    {country}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Asia */}
            <motion.div
              className="bg-[#FAF8F3] border border-gray-200 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-[#184504] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M13 1L13.001 4.06201C16.6192 4.51365 19.4869 7.38163 19.9381 11L23 11V13L19.938 13.001C19.4864 16.6189 16.6189 19.4864 13.001 19.938L13 23H11L11 19.9381C7.38163 19.4869 4.51365 16.6192 4.06201 13.001L1 13V11L4.06189 11C4.51312 7.38129 7.38129 4.51312 11 4.06189L11 1H13ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"></path>
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#2d4a1f] mb-4">Asia</h3>
              <ul className="space-y-2">
                {countriesServed.asia.map((country) => (
                  <li key={country} className="text-gray-600 flex items-center gap-2">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.4571 9.45711L16.0429 8.04289L11 13.0858L8.20711 10.2929L6.79289 11.7071L11 15.9142L17.4571 9.45711Z"></path>
                      </svg>
                    </span>{' '}
                    {country}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expansion Targets */}
      <section className="py-16 bg-[#FAF8F3]">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-4">Expansion Targets</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are actively expanding our reach to serve new markets and meet growing global
              demand for premium Nigerian agricultural products
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 bg-[#184504] rounded-xl p-8 items-center">
            <div className="space-y-2 lg:space-y-3">
              {expansionTargets.map((target, index) => (
                <motion.div
                  key={index}
                  className="text-white rounded-2xl p-6 lg:p-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-xl lg:text-2xl text-[#184504] font-bold">
                        {target.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3">{target.title}</h3>
                      <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                        {target.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="relative h-[280px] sm:h-[300px] lg:h-[350px] w-full max-w-md mx-auto px-8 lg:max-w-none rounded-2xl overflow-hidden shadow-xl order-first lg:order-last"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/world-map.jpg"
                alt="Global Expansion Map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Port & Logistics Network */}
      <section className="py-16 bg-[#FAF8F3]">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-4">Port & Logistics Network</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kobam&apos;s partners with reputable global logistics providers to ensure smooth
              cross-border flow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Africa Ports */}
            <motion.div
              className="bg-white shadow-md border border-gray-200 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-[#184504] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M14 8.94737L22 14V16L14 13.4737V18.8333L17 20.5V22L12.5 21L8 22V20.5L11 18.8333V13.4737L3 16V14L11 8.94737V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5V8.94737Z"></path>
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#2d4a1f] mb-4">DHL Global Forwarding</h3>
              <ul className="space-y-2">
                {portsLogistics.africa.map((port) => (
                  <li key={port} className="text-gray-600 flex items-center gap-2">
                    <span className="text-yellow-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.4571 9.45711L16.0429 8.04289L11 13.0858L8.20711 10.2929L6.79289 11.7071L11 15.9142L17.4571 9.45711Z"></path>
                      </svg>
                    </span>{' '}
                    {port}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Europe Ports */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-[#184504] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M9 4H14.4458C14.7905 4 15.111 4.17762 15.2938 4.47L18.75 10H23.1577C23.4339 10 23.6577 10.2239 23.6577 10.5C23.6577 10.5837 23.6367 10.666 23.5967 10.7394L19.6364 18H19C18.4694 18 17.9548 17.9311 17.4648 17.8018L20.63 12H3.4L4.44833 17.824C3.9845 17.939 3.49937 18 3 18H2.45455L1.21434 11.1789C1.11555 10.6355 1.47595 10.1149 2.01933 10.0161C2.07835 10.0054 2.13822 10 2.19821 10H3V5C3 4.44772 3.44772 4 4 4H5V1H9V4ZM5 10H16.3915L13.8915 6H5V10ZM3 20C4.53671 20 5.93849 19.4223 7 18.4722C8.06151 19.4223 9.46329 20 11 20C12.5367 20 13.9385 19.4223 15 18.4722C16.0615 19.4223 17.4633 20 19 20H21V22H19C17.5429 22 16.1767 21.6104 15 20.9297C13.8233 21.6104 12.4571 22 11 22C9.54285 22 8.17669 21.6104 7 20.9297C5.82331 21.6104 4.45715 22 3 22H1V20H3Z"></path>
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#2d4a1f] mb-4">Maersk</h3>
              <ul className="space-y-2">
                {portsLogistics.europe.map((port) => (
                  <li key={port} className="text-gray-600 flex items-center gap-2">
                    <span className="text-yellow-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.4571 9.45711L16.0429 8.04289L11 13.0858L8.20711 10.2929L6.79289 11.7071L11 15.9142L17.4571 9.45711Z"></path>
                      </svg>
                    </span>{' '}
                    {port}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Asia Ports */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-[#184504] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M8.96456 18C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456ZM15 7H3V15.0505C3.63526 14.4022 4.52066 14 5.5 14C6.8962 14 8.10145 14.8175 8.66318 16H14.3368C14.5045 15.647 14.7296 15.3264 15 15.0505V7ZM17 13H21V12.715L18.9917 10H17V13ZM17.5 19C18.1531 19 18.7087 18.5826 18.9146 18C18.9699 17.8436 19 17.6753 19 17.5C19 16.6716 18.3284 16 17.5 16C16.6716 16 16 16.6716 16 17.5C16 17.6753 16.0301 17.8436 16.0854 18C16.2913 18.5826 16.8469 19 17.5 19ZM7 17.5C7 16.6716 6.32843 16 5.5 16C4.67157 16 4 16.6716 4 17.5C4 17.6753 4.03008 17.8436 4.08535 18C4.29127 18.5826 4.84689 19 5.5 19C6.15311 19 6.70873 18.5826 6.91465 18C6.96992 17.8436 7 17.6753 7 17.5Z"></path>
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#2d4a1f] mb-4">Regional & Local Freight</h3>
              <ul className="space-y-2">
                {portsLogistics.asia.map((port) => (
                  <li key={port} className="text-gray-600 flex items-center gap-2">
                    <span className="text-yellow-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.4571 9.45711L16.0429 8.04289L11 13.0858L8.20711 10.2929L6.79289 11.7071L11 15.9142L17.4571 9.45711Z"></path>
                      </svg>
                    </span>{' '}
                    {port}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Hubs */}
      <section className="py-16 ">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          ></motion.div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 bg-[#184504] p-12 rounded-2xl items-center">
            <div className="space-y-2 lg:space-y-3">
              <h2 className="text-2xl font-bold text-white mb-2">Trusted Ports & Regional Hubs</h2>
              <p className="text-white max-w-2xl mx-auto">
                Our operations integrate trusted ports and regional hubs to ensure smooth
                cross-border flow and efficient delivery to all destinations.
              </p>
              {regionalHubs.map((target, index) => (
                <motion.div
                  key={index}
                  className=" text-white rounded-2xl"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div className="w-12 h-12  bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-[#184504]">{target.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3">{target.title}</h3>
                      <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                        {target.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="relative h-[280px] sm:h-[350px] lg:h-[400px] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/container.jpg"
                alt="Port & Logistics Network"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Regional Hubs End */}

      {/* Shipping & Sustainability */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="relative h-[400px] rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/shipping-container.jpg"
                alt="Shipping Containers"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="space-y-6">
              <motion.h2
                className="text-3xl font-bold text-[#2d4a1f]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Shipping & Sustainability
              </motion.h2>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                We are committed to sustainable shipping practices that minimize environmental
                impact while ensuring product quality.
              </motion.p>

              {shippingBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#184504] font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#2d4a1f] mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Compliance Certifications */}
      <section className="py-16 bg-[#FAF8F3]">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-4">
              Compliance Certifications for Regions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of quality and compliance for every market we serve
            </p>
          </motion.div>

          <div className="space-y-12">
            {complianceCertifications.map((region, regionIndex) => (
              <motion.div
                key={regionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: regionIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-[#2d4a1f] mb-6 flex items-center gap-3">
                  {/* <span className="w-10 h-10 bg-[#184504] rounded-full flex items-center justify-center text-[#184504] font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                    </svg>
                  </span> */}
                  {region.region}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {region.certifications.map((cert, certIndex) => (
                    <motion.div
                      key={certIndex}
                      className="bg-white shadow-md rounded-xl p-6 text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ background: 'linear-gradient(135deg, #1A4D2E 0%, #FFCB05 100%)' }}
                      >
                        <span className="text-2xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M17 15.2454V22.1169C17 22.393 16.7761 22.617 16.5 22.617C16.4094 22.617 16.3205 22.5923 16.2428 22.5457L12 20L7.75725 22.5457C7.52046 22.6877 7.21333 22.6109 7.07125 22.3742C7.02463 22.2964 7 22.2075 7 22.1169V15.2454C5.17107 13.7793 4 11.5264 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 11.5264 18.8289 13.7793 17 15.2454ZM9 16.4185V19.4676L12 17.6676L15 19.4676V16.4185C14.0736 16.7935 13.0609 17 12 17C10.9391 17 9.92643 16.7935 9 16.4185ZM12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"></path>
                          </svg>
                        </span>
                      </div>
                      <h4 className="font-bold text-lg text-[#2d4a1f] mb-2">{cert.name}</h4>
                      <p className="text-gray-600 text-sm">{cert.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl text-[#184504] md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Place Your Order?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get competitive pricing and reliable supply for your agricultural export needs{' '}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => {
                console.log('🔘 Request Quote button clicked')
                setIsQuoteDialogOpen(true)
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-[#184504] font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Request a Quote
            </button>
            <Link
              href="/contact"
              className="bg-[#184504] hover:bg-black text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-block"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Dialogs */}
      <RequestQuoteDialog
        isOpen={isQuoteDialogOpen}
        onClose={() => setIsQuoteDialogOpen(false)}
        productName="General Inquiry"
      />
    </div>
  )
}
