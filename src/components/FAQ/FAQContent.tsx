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
      question: ` How can I become a partner or distributor for Kobam's products?`,
      answer:
        'To become a partner, you can contact us via our official email with your business details, intended products, and target markets. Our team will review your application and guide you through the partnership process.',
    },
    {
      question: 'Can partners request customized packaging or product specifications?',
      answer:
        'Yes. We work closely with partners to accommodate custom packaging, labeling, and product specifications in line with buyer requirements and international export standards.',
    },
    {
      question: 'Can I choose my preferred shipping partner?',
      answer:
        `Yes. Clients may nominate their preferred shipping partner, subject to Kobam's approval to ensure regulatory compliance and proper liability coverage.
Note: Kobam's is not liable for damage to goods shipped using the client's nominated shipping method.`,
    },
    {
      question: 'Can you accommodate large, bulk orders?',
      answer:
        'Absolutely. We are fully equipped for B2B bulk export and international distribution.',
    },
    {
      question: `How do I contact Kobam's customer service?`,
      answer:
        'You can reach us via email, phone, or our website contact form. Response time is typically within 24–48 hours.',
    },
  ],
  shipping: [
    {
      question: ` What products does Kobam's Agro Solutions specialize in ?`,
      answer:
        'We export premium agricultural commodities such as sorghum, soya beans, ginger, turmeric, maize, cocoa beans, sesame seed, and palm kernels, sourced directly from Nigerian farms.',
    },
    {
      question: 'Are your products sustainably sourced?',
      answer:
        'Yes. We partner with local and regional farmers who follow sustainable agricultural practices. We apply strict quality controls across sourcing, processing, and packaging to meet global safety and quality standards.',
    },
    {
      question: 'How do you ensure product quality?',
      answer:
        'We implement rigorous quality control checks at every stage, ensuring compliance with international standards.',
    },
    {
      question: 'What is your Minimum Order Quantity (MOQ)?',
      answer:
          `
Our Minimum Order Quantity (MOQ) at Kobam's Agro Solutions is one full 20ft container per product category. 
`,
    },
     {
      question: ' Do you offer trial orders?',
      answer:
          `
Yes. At Kobam's Agro Solutions, we offer trial orders between 5–10 MT for new buyers.
Note: Trial orders are subject to negotiation and product availability.`

    },
     {
      question: 'Do you provide certifications for your products?',
      answer:
          `
Yes. All products are accompanied by the necessary export certifications and supporting documents upon request.

`,
    },
     {
      question: `What should I do if I receive the wrong product?
`,
      answer:
          `
Contact our support team immediately with photos and order details. Once verified, we will provide compensation or replacement credits.


`,
    },
  ],
  logistics: [
    {
      question: 'Which global markets do you serve?',
      answer:
        'We currently export to West Africa, the European Union (EU), and the Middle East, with plans to expand into organic and speciality markets in Europe and North America.',
    },
    {
      question: 'What are your Standard delivery terms?',
      answer:
        "Our standard delivery term is FOB (Free On Board) at Nigerian ports. CIF (Cost, Insurance, and Freight) can be arranged upon request.",
    },
    {
      question: 'What is the average lead time for orders?',
      answer:
        `Lead time typically ranges from 2–4 weeks, depending on the commodity, order volume, and destination.`,
    },
    {
      question: ' Do you provide shipment tracking?',
      answer:
        'Yes. All buyers receive tracking information for their shipments, allowing real-time monitoring from the port of origin to delivery.',
    },
    {
      question: 'How do you ensure product freshness during long-distance shipping?',
      answer:
        'We maintain a comprehensive cold chain logistics system with pre-cooling, reefer containers, and ventilated export packaging. This protects product freshness and shelf life from harvest to delivery.',
    },
    {
      question: 'What are your packaging and private labelling capabilities?',
      answer:
        'We offer export-ready cartons, crates, bins, and mesh bags with private labelling, multilingual stickers, barcoding, and custom sizes, all certified under IFS & BRCGS standards.',
    },
     {
      question: 'What happens if goods are damaged, defective, or lost during transit?',
      answer:
        `If your goods arrive damaged, defective, or are confirmed lost during transit, Kobam's will provide compensation or replacement credits for verified claims. Since returns are not allowed, all claims must be submitted within 24–72 hours of delivery.`,
    },
      {
      question: 'How are refunds processed for order cancellations?',
      answer:
        `Approved refunds are completed within 7–14 business days through the original payment channel.`,
    },
    {
      question: 'What documents are provided with my order?',
      answer:
        `Kobam's provides Commercial Invoice, Bill of Lading / Air Waybill, Certificate of Origin, Phytosanitary Certificate, and Insurance Certificate.
All documents are stored digitally for client access and retrieval.`,
    },
     {
      question: `How can I place an order with Kobam's Agro Solutions?`,
      answer:
        `Orders can be initiated directly from the Product Detail Page by clicking the “Get Quote” or “Send Inquiry” button. Once your request is submitted, our sales team will reach out with pricing, availability, shipping options, and required export documentation.`,
    },
   
     {
      question: `How can I place an order with Kobam's Agro Solutions?`,
      answer:
        `Orders can be initiated directly from the Product Detail Page by clicking the “Get Quote” or “Send Inquiry” button. Once your request is submitted, our sales team will reach out with pricing, availability, shipping options, and required export documentation.
        You may also follow up via email or phone for faster processing. Your order is confirmed once payment and compliance checks are completed.`,
    },
     {
      question: `Do you provide certifications for your products?`,
      answer:
        `Yes, our products are certified to meet international standards, and we can provide the necessary documentation upon request.`,
    },
     {
      question: `What payment methods do you accept?`,
      answer:
        `We accept secure international payments via a Letter of Credit (LC) or Telegraphic Transfer (TT) before shipment. For established or long-term partners, customized payment terms can be arranged through negotiation.`,
    },

  ],
  compliance: [
    {
      question: 'Are your products certified for international export?',
      answer:
        'Yes. Our products comply with global quality and safety standards, including SONCAP, NAFDAC, ISO 9001, and Global GAP. Independent regulators validate and certify each shipment.',
    },
    {
      question: 'What certifications do your products have?',
      answer:
        'All our commodities are certified to meet international export standards. Depending on the product, we provide Certificates of Analysis (COA) and Phytosanitary Certificates to ensure compliance with buyer and destination-country requirements.',
    },
    {
      question: 'Do you provide Certificates of Analysis (COA) for your exports?',
      answer:
        `Yes. Every shipment can be accompanied by a Certificate of Analysis detailing product quality, moisture content, and other relevant parameters. This guarantees transparency and quality assurance for our buyers.`,
    },
    {
      question: 'Do you follow any industry-standard quality assurance procedures?',
      answer:
        'Yes. We implement internationally recognized quality assurance protocols, including pre-shipment inspections, lab testing (when neccessary), and proper documentation to maintain product integrity throughout the supply chain.',
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
