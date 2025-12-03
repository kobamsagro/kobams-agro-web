import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy | Kobam's Agro Solutions",
  description:
    "Learn how Kobam's Agro Solutions collects, uses, and protects your personal information in compliance with NDPA 2023 and NDPR 2019.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#184504] text-white py-32">
        <div className="container mx-auto my-12 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-200">
            Last updated on November 15, 2025 | Effective Date: November 15, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Section 1 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Introduction</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                This Privacy Policy explains how we collect, use, store, and safeguard personal
                information in compliance with the Nigeria Data Protection Act (NDPA) 2023, the
                Nigeria Data Protection Regulation (NDPR) 2019, and where applicable international
                data protection standards such as the General Data Protection Regulation (GDPR) for
                clients in the EU and similar laws in Asia and the Middle East.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Data We Collect</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We collect personal and business information through our website forms, email
                communication, phone calls, and client interactions. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name, email address, phone number, company name</li>
                <li>Shipping and billing addresses</li>
                <li>Transaction and purchase history</li>
                <li>Identification details submitted for export documentation</li>
                <li>IP address, device information, and browser data for analytics</li>
                <li>Communication records and inquiries</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Purpose of Data Collection</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>We collect and process data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process export orders and manage logistics</li>
                <li>Respond to inquiries and offer customer support</li>
                <li>Prepare required export, customs, and regulatory documentation</li>
                <li>Improve website performance and enhance user experience</li>
                <li>Send promotional or educational emails (only with consent)</li>
                <li>Fulfil contractual, legal, and compliance obligations</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Legal Basis for Processing</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>Under the NDPA, our processing activities are based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>User consent</li>
                <li>Contractual necessity for fulfilling export and supply agreements</li>
                <li>Legal obligations relating to Nigerian and international export regulations</li>
                <li>
                  Legitimate business interests such as service improvement and fraud prevention
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Data Sharing and Third-Party Disclosures
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We do not sell or trade personal data. Data may be shared only with trusted parties
                necessary for business operations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Shipping companies and logistics partners</li>
                <li>Payment processors and banks</li>
                <li>
                  Government agencies (for customs, NAFDAC documentation, phytosanitary
                  certification, etc.)
                </li>
                <li>Quality assurance bodies and certified laboratories</li>
                <li>Technology and cloud service providers who host or support our systems</li>
              </ul>
              <p className="mt-4">
                All third parties must comply with NDPA and uphold confidentiality and data
                protection standards.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                6
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                International Data Transfers
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                Because we operate across Africa, Europe, Asia, and the Middle East, your data may
                be transferred outside Nigeria. All international transfers are handled securely and
                in compliance with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>NDPA 2023</li>
                <li>GDPR (for EU clients)</li>
                <li>Relevant regional data protection laws</li>
              </ul>
              <p className="mt-4">
                We ensure that third-country recipients maintain adequate data protection
                safeguards.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                7
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Data Retention</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We retain personal and transactional data only for as long as necessary to meet:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contractual obligations</li>
                <li>Export and regulatory requirements</li>
                <li>Legal and audit purposes</li>
              </ul>
              <p className="mt-4">
                Data may be deleted earlier upon request unless retention is required by law.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                8
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Your Rights Under Nigerian Law
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent at any time</li>
                <li>Object to certain types of processing</li>
                <li>Request a copy of your data (data portability)</li>
                <li>Report concerns to the Nigeria Data Protection Commission (NDPC)</li>
              </ul>
              <p className="mt-4">
                To exercise your rights, contact us at:{' '}
                <a
                  href="mailto:info@kobamsagro.com"
                  className="text-[#184504] hover:underline font-semibold"
                >
                  info@kobamsagro.com
                </a>
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                9
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Data Security</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>We maintain strong security measures to protect your data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL encryption</li>
                <li>Secured servers and firewalls</li>
                <li>Controlled access permissions</li>
                <li>Routine security checks and vulnerability assessments</li>
              </ul>
            </div>
          </div>

          {/* Section 10 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                10
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Children&apos;s Data</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                Our services are intended for adults. We do not knowingly collect personal data from
                anyone under 18.
              </p>
            </div>
          </div>

          {/* Section 11 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                11
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Policy Updates</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We may update this Privacy Policy periodically to reflect changes in our operation
                or regulatory requirements. Continued use of our website signifies acceptance of the
                revised terms.
              </p>
            </div>
          </div>

          {/* Section 12 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                12
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Contact Us</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or
                our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="font-semibold text-gray-900 mb-2">Kobam&apos;s Agro Solutions</p>
                <p className="mb-1">
                  <strong>Email:</strong> info@kobamsagrosolutions.com
                </p>
                <p className="mb-1">
                  <strong>Phone:</strong> +234 (0) 123 456 7890
                </p>
                <p className="mb-1">
                  <strong>Address:</strong> 123 Agricultural Way, Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
