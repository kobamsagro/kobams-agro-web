'use client'
import React, { useState } from 'react'

type FAQCategory = 'partnerships' | 'shipping' | 'logistics' | 'compliance'

interface FAQ {
  question: string
  answer: string
}

const faqData: Record<FAQCategory, FAQ[]> = {
  partnerships: [
    {
      question: "How can I partner with Kobam's as a local supplier?",
      answer:
        'We welcome partnerships with local farmers and suppliers who meet our quality standards. To become a supplier, please contact our procurement team through our partnership form. We will assess your production capacity, quality standards, and certifications. Our team will guide you through the onboarding process, which includes farm visits, quality assessments, and contract negotiations.',
    },
    {
      question: 'What are the requirements to become a certified food supplier?',
      answer:
        'To become a certified supplier, you must meet several requirements: maintain organic or sustainable farming practices, possess relevant agricultural certifications (such as GlobalGAP or organic certification), demonstrate consistent production capacity, comply with food safety standards, and pass our quality inspection process. We provide support and guidance to help suppliers meet these requirements.',
    },
    {
      question: 'Do you provide training for new partners?',
      answer:
        'Yes, we offer comprehensive training programs for our partners. This includes training on sustainable farming practices, quality control measures, post-harvest handling, documentation requirements, and export standards. We also provide ongoing technical support and regular workshops to ensure our partners maintain the highest quality standards.',
    },
    {
      question: 'What is the payment structure for suppliers?',
      answer:
        'We offer competitive and transparent payment structures. Payment terms are typically net 30-45 days after delivery and quality verification. We provide advance payments for long-term partners and offer flexible payment options based on order volume and partnership duration. All payment terms are clearly outlined in our supplier agreements.',
    },
  ],
  shipping: [
    {
      question: 'What shipping methods do you offer?',
      answer:
        'We offer various shipping methods including sea freight (FCL and LCL), air freight for urgent orders, and land transportation for regional deliveries. The choice of shipping method depends on your location, order size, and delivery timeline. We work with trusted logistics partners to ensure safe and timely delivery of all products.',
    },
    {
      question: 'How long does international shipping take?',
      answer:
        'International shipping times vary by destination and shipping method. Sea freight typically takes 3-6 weeks, air freight takes 5-10 days, and regional land transport takes 1-2 weeks. We provide detailed shipping timelines during the quotation process and keep you updated throughout the shipping process with tracking information.',
    },
    {
      question: 'Do you handle customs clearance?',
      answer:
        'Yes, we provide comprehensive customs clearance support. Our experienced team handles all export documentation, customs declarations, and compliance requirements. We work with customs brokers in destination countries to facilitate smooth clearance. We also provide guidance on import regulations and requirements for your specific country.',
    },
    {
      question: 'What are your packaging standards?',
      answer:
        'We use industry-standard packaging designed to maintain product quality during transit. This includes food-grade materials, moisture barriers, proper labeling, and compliance with international packaging standards. We can also accommodate custom packaging requirements based on your specifications and destination country regulations.',
    },
  ],
  logistics: [
    {
      question: 'How do you ensure product quality during transportation?',
      answer:
        'We implement strict quality control measures throughout the logistics chain. This includes temperature-controlled storage, proper handling procedures, quality inspections before shipping, sealed containers to prevent contamination, and real-time monitoring during transit. We also provide certificates of quality and origin with each shipment.',
    },
    {
      question: 'Can I track my shipment?',
      answer:
        "Yes, we provide comprehensive shipment tracking. Once your order ships, you will receive tracking information via email. You can monitor your shipment's progress through our online portal or by contacting our logistics team. We provide regular updates on shipment status, estimated arrival times, and any potential delays.",
    },
    {
      question: 'What happens if there is a delay in delivery?',
      answer:
        'In case of delays, we immediately notify you and provide updated delivery timelines. We work proactively with our logistics partners to minimize delays and find alternative solutions when necessary. For significant delays beyond our control, we discuss compensation options or alternative arrangements based on the terms of your contract.',
    },
    {
      question: 'Do you offer warehousing services?',
      answer:
        'Yes, we offer warehousing and storage solutions for customers who need flexible delivery schedules. Our warehouses are equipped with proper storage facilities, climate control, and security systems. We can store your products and arrange delivery according to your schedule, helping you manage inventory and reduce logistics costs.',
    },
  ],
  compliance: [
    {
      question: 'What certifications do your products have?',
      answer:
        'Our products hold various international certifications including organic certifications, fair trade certifications, food safety certifications (HACCP, ISO 22000), quality management certifications (ISO 9001), and export certifications. Specific certifications vary by product. We can provide detailed certification documentation upon request.',
    },
    {
      question: 'How do you ensure compliance with international standards?',
      answer:
        'We maintain strict compliance through regular audits, quality testing, documentation management, staff training, and partnerships with certified laboratories. We stay updated on international regulations and standards, and our quality assurance team ensures all products meet or exceed requirements for your destination market.',
    },
    {
      question: 'Can you provide phytosanitary certificates?',
      answer:
        "Yes, we provide phytosanitary certificates and all necessary export documentation. Our team works with relevant government agencies to obtain required certificates for each shipment. We ensure all documentation is accurate, complete, and compliant with both Nigerian export regulations and your country's import requirements.",
    },
    {
      question: 'What quality control measures do you have in place?',
      answer:
        'We implement comprehensive quality control at every stage: farm-level inspections, post-harvest quality checks, laboratory testing for contaminants and quality parameters, storage and handling protocols, pre-shipment inspections, and third-party quality verification. We maintain detailed quality records and provide quality certificates with each shipment.',
    },
  ],
}

const categories = [
  {
    id: 'partnerships' as FAQCategory,
    name: 'Partnership & Collaboration',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 'shipping' as FAQCategory,
    name: 'Product Shipping',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    id: 'logistics' as FAQCategory,
    name: 'Export & Logistics',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    id: 'compliance' as FAQCategory,
    name: 'Certifications & Compliance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
]

export default function FAQContent() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('partnerships')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Category Tabs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Question Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setOpenIndex(0)
                }}
                className={`p-6 rounded-xl transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#184504] text-white shadow-lg'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  {category.icon}
                  <span className="text-sm font-semibold text-center">{category.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#184504] text-white px-6 py-4 rounded-t-xl">
            <h3 className="text-xl font-bold">
              {categories.find((c) => c.id === activeCategory)?.name}
            </h3>
          </div>
          <div className="bg-white border border-gray-200 rounded-b-xl">
            {faqData[activeCategory].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
