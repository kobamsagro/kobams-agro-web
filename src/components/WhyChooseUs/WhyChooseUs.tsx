'use client'
import React from 'react'

const features = [
  {
    id: 1,
    title: 'Certified Quality & Compliance',
    description:
      'We export certified, fresh produce that meets rigorous Nigerian and International food safety standards, including those of the EU, GCC and other global regulations.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,203,5,1)"
      >
        <path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 3.04879L5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879ZM16.4524 8.22183L17.8666 9.63604L11.5026 16L7.25999 11.7574L8.67421 10.3431L11.5019 13.1709L16.4524 8.22183Z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'End to End Digital Documentation',
    description:
      "Kobam's Agro Solutions provides secure, cloud-based records for all shipments, ensuring full transparency and compliance. From cold-chain handling and customs clearance to documentation and reefer shipments, every stage of the export process is managed digitally to guarantee your produce arrives fresh, on time, and in perfect condition.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,203,5,1)"
      >
        <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Sustainable Packaging',
    description:
      'Eco-friendly packaging protects product quality while minimizing environmental impact.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,203,5,1)"
      >
        <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 5C15.3137 5 18 7.68629 18 11C18 12.5367 17.4153 13.9385 16.4632 15L13 15V13L15.6197 13C16.1466 12.3744 16.5 11.6104 16.5 10.75C16.5 8.95507 15.0449 7.5 13.25 7.5C12.3896 7.5 11.6256 7.85342 11 8.38027V5.07555C11.3244 5.02598 11.6588 5 12 5ZM11 12H13V17C13 18.1046 12.1046 19 11 19C9.89543 19 9 18.1046 9 17C9 15.8954 9.89543 15 11 15V12Z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Advanced Traceability',
    description:
      'Every shipment is backed by full traceability from farm to final destination.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,203,5,1)"
      >
        <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a4d2e] mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We combine quality, technology and sustainability to deliver excellence in every
            shipment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#184504] text-white p-8 rounded-2xl hover:bg-[#2d4a1f] transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-200 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
