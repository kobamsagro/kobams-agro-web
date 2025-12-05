'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import { RequestQuoteDialog } from '../RequestQuoteDialog/RequestQuoteDialog'

export default function ExportProcessContent() {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)

  const exportFlow = [
    {
      title: 'Product Preparation',
      description: 'Quality control, grading, and packaging according to international standards',
      icon: '1',
    },
    {
      title: 'Documentation',
      description: 'Prepare all required export documents and certifications',
      icon: '2',
    },
    {
      title: 'Logistics Planning',
      description:
        'Arrange transportation, insurance, and shipping schedules',
      icon: '3',
    },
    {
      title: 'Customs Clearance',
      description:
        'Handle export customs procedures and compliance requirements',
      icon: '4',
    },
    {
      title: 'Shipment Tracking',
      description:
        'Monitor shipment progress and coordinate with buyers',
      icon: '5',
    },
  ]

  const qualityCompliance = [
    {
      title: 'ISO 22000',
      description: 'Food Safety Management',
      
    },
    {
      title: 'GAP',
      description: 'Good Agricultural Practices',
      
    },
    {
      title: 'EQC',
      description: 'Export Quality Compliance',
      
    },
    {
      title: 'SFI',
      description: 'Sustainable Farming Initiative',
     
    },
  ]

  const packagingStandards = [
    {
      title: 'Corrugated Cartons',
      description: 'Durable, stackable boxes for dry goods and grains',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(255,255,255,1)"
        >
          <path d="M4.5 7.65311V16.3469L12 20.689L19.5 16.3469V7.65311L12 3.311L4.5 7.65311ZM12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM6.49896 9.97065L11 12.5765V17.625H13V12.5765L17.501 9.97066L16.499 8.2398L12 10.8445L7.50104 8.2398L6.49896 9.97065Z"></path>
        </svg>
      ),
    },
    {
      title: 'Vacuum - Sealed Bags',
      description: 'Airtight packaging for freshness and extended shelf life.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(255,255,255,1)"
        >
          <path d="M7.00488 7.99966V5.99966C7.00488 3.23824 9.24346 0.999664 12.0049 0.999664C14.7663 0.999664 17.0049 3.23824 17.0049 5.99966V7.99966H20.0049C20.5572 7.99966 21.0049 8.44738 21.0049 8.99966V20.9997C21.0049 21.5519 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.5519 3.00488 20.9997V8.99966C3.00488 8.44738 3.4526 7.99966 4.00488 7.99966H7.00488ZM7.00488 9.99966H5.00488V19.9997H19.0049V9.99966H17.0049V11.9997H15.0049V9.99966H9.00488V11.9997H7.00488V9.99966ZM9.00488 7.99966H15.0049V5.99966C15.0049 4.34281 13.6617 2.99966 12.0049 2.99966C10.348 2.99966 9.00488 4.34281 9.00488 5.99966V7.99966Z"></path>
        </svg>
      ),
    },
    {
      title: 'Insulated Containers',
      description: 'Temperature - controlled packaging for perishable items',
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 4V6H15V4H9Z"></path></svg>
      ),
    },
    {
      title: 'Handling & Storage',
      description: 'Cold-chain processes for perishable items; trained staff for proper handling',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(255,255,255,1)"
        >
          <path d="M21 11.6458V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11.6458C2.37764 10.9407 2 10.0144 2 9V3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V9C22 10.0144 21.6224 10.9407 21 11.6458ZM19 12.874C18.6804 12.9562 18.3453 13 18 13C16.8053 13 15.7329 12.4762 15 11.6458C14.2671 12.4762 13.1947 13 12 13C10.8053 13 9.73294 12.4762 9 11.6458C8.26706 12.4762 7.19469 13 6 13C5.6547 13 5.31962 12.9562 5 12.874V20H19V12.874ZM14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 10.1046 16.8954 11 18 11C19.1046 11 20 10.1046 20 9V4H4V9C4 10.1046 4.89543 11 6 11C7.10457 11 8 10.1046 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9Z"></path>
        </svg>
      ),
    },
    {
      title: 'Shipment Preparation',
      description:
        'Palletization, shrink-wrapping, fumigation certification and compliance with ISPM-15 export requirements',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(255,255,255,1)"
        >
          <path d="M8.96456 18C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456ZM15 7H3V15.0505C3.63526 14.4022 4.52066 14 5.5 14C6.8962 14 8.10145 14.8175 8.66318 16H14.3368C14.5045 15.647 14.7296 15.3264 15 15.0505V7ZM17 13H21V12.715L18.9917 10H17V13ZM17.5 19C18.1531 19 18.7087 18.5826 18.9146 18C18.9699 17.8436 19 17.6753 19 17.5C19 16.6716 18.3284 16 17.5 16C16.6716 16 16 16.6716 16 17.5C16 17.6753 16.0301 17.8436 16.0854 18C16.2913 18.5826 16.8469 19 17.5 19ZM7 17.5C7 16.6716 6.32843 16 5.5 16C4.67157 16 4 16.6716 4 17.5C4 17.6753 4.03008 17.8436 4.08535 18C4.29127 18.5826 4.84689 19 5.5 19C6.15311 19 6.70873 18.5826 6.91465 18C6.96992 17.8436 7 17.6753 7 17.5Z"></path>
        </svg>
      ),
    },
  ]

  const shippingDocumentation = [
    {
      title: 'Sea Freight',
      description: 'Ideal for bulk and non-perishable commodities',
      items: [
        'Cost-effective for large volumes',
        'Global port network',
        'Container',
        'Bulk cargo handling',
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(255,255,255,1)"
        >
          <path d="M9 4H14.4458C14.7905 4 15.111 4.17762 15.2938 4.47L18.75 10H23.1577C23.4339 10 23.6577 10.2239 23.6577 10.5C23.6577 10.5837 23.6367 10.666 23.5967 10.7394L19.6364 18H19C18.4694 18 17.9548 17.9311 17.4648 17.8018L20.63 12H3.4L4.44833 17.824C3.9845 17.939 3.49937 18 3 18H2.45455L1.21434 11.1789C1.11555 10.6355 1.47595 10.1149 2.01933 10.0161C2.07835 10.0054 2.13822 10 2.19821 10H3V5C3 4.44772 3.44772 4 4 4H5V1H9V4ZM5 10H16.3915L13.8915 6H5V10ZM3 20C4.53671 20 5.93849 19.4223 7 18.4722C8.06151 19.4223 9.46329 20 11 20C12.5367 20 13.9385 19.4223 15 18.4722C16.0615 19.4223 17.4633 20 19 20H21V22H19C17.5429 22 16.1767 21.6104 15 20.9297C13.8233 21.6104 12.4571 22 11 22C9.54285 22 8.17669 21.6104 7 20.9297C5.82331 21.6104 4.45715 22 3 22H1V20H3Z"></path>
        </svg>
      ),
    },
    {
      title: 'Air Freight',
      description: 'Suited for high-value or time-sensitive products',
      items: [
        'Fast delivery times',
        'Temperature control',
        'Priority handling',
        'Express customs clearance',
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(255,255,255,1)"
        >
          <path d="M14 8.94737L22 14V16L14 13.4737V18.8333L17 20.5V22L12.5 21L8 22V20.5L11 18.8333V13.4737L3 16V14L11 8.94737V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5V8.94737Z"></path>
        </svg>
      ),
    },
  ]

  const documentsChecklist = [
    { name: 'Commercial Invoice' },
    { name: 'Bill of Lading / Air Waybill' },
    { name: 'Certificate of Origin'},
    { name: 'Insurance Certificate' },
  ]

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
        <motion.div
          className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center items-center text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={fadeInUp}>
            Export Process
          </motion.h1>
          <motion.p className="text-lg max-w-2xl" variants={fadeInUp}>
            Kobam&apos;s Agro Solutions follows a transparent globally compliant process to ensure
            every meets international standards.
          </motion.p>
        </motion.div>
      </section>

      {/* Our Export Flow */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-4">Our Export Flow</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined transparent process from order to delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {exportFlow.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#184504] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#2d4a1f] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-4">Quality & Compliance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kobam&apos;s Agro Solutions meets both domestic and international quality requirements
              to safeguard product integrity
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityCompliance.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
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
                <h3 className="text-lg font-bold text-[#2d4a1f] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging & Delivery Standards */}
      <section className="py-16 bg-[#FAF8F3]">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-4">
              Packaging & Delivery Standards
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kobam&apos;s Agro Solutions packaging and logistics protocol is designed to maintain
              quality throughout the transit process
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packagingStandards.map((standard, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-[#184504] rounded-full flex items-center justify-center mb-6">
                  {standard.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2d4a1f] mb-4">{standard.title}</h3>
                <p className="text-gray-600">{standard.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Boxes */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              className="bg-[#184504] text-white rounded-2xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Cold Chain Storage</h3>
              <p className="text-gray-200 mb-4">
                Temperature-controlled storage facilities maintain product freshness from harvest to
                delivery.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li>• Controlled temperature environments</li>
                <li>• Humidity monitoring systems</li>
                <li>• Real-time temperature tracking</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-yellow-400 text-[#184504] rounded-2xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Logistics Optimization</h3>
              <p className="mb-4">
                Strategic logistics planning ensures cost-effective and timely delivery to global
                destinations.
              </p>
              <ul className="space-y-2">
                <li>• Route optimization</li>
                <li>• Container consolidation</li>
                <li>• Multi-modal transport options</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shipping & Documentation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-4">Shipping & Documentation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kobam&apos;s delivers dependable shipping solutions supported by
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {shippingDocumentation.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#184504] rounded-full flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#2d4a1f]">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Checklist */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2d4a1f] mb-4">Documents Provided</h2>
            {/* <p className="text-gray-600 max-w-2xl mx-auto">
              Essential documents required for smooth export operations
            </p> */}
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentsChecklist.map((doc, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-[#184504] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#2d4a1f] mb-2">{doc.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Place Your Order?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Start your export journey with us today. Get competitive pricing and reliable supply for
            your agricultural needs.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setIsQuoteDialogOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-[#184504] font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Request Quote
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

      {/* Quote Dialog */}
      <RequestQuoteDialog
        isOpen={isQuoteDialogOpen}
        onClose={() => setIsQuoteDialogOpen(false)}
        productName="Export Process Inquiry"
      />
    </div>
  )
}
