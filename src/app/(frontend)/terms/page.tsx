import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Terms & Conditions | Kobam's Agro Solutions",
  description:
    "Read our terms and conditions for using Kobam's Agro Solutions services and website.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#184504] text-white py-32">
        <div className="container mx-auto my-12 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
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
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Use of Website</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                You must be at least 18 years old or have legal parental or guardian consent to use
                this website.
              </p>
              <p>
                By accessing or using this site, you agree to use it only for lawful purposes and in
                full compliance with these Terms and all applicable laws and regulations.
              </p>
              <p>You must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Engage in any activity that could harm, disrupt, or interfere with the
                  website&apos;s functionality or security.
                </li>
                <li>
                  Attempt to gain unauthorized access to any part of the website, its servers,
                  databases, or backend systems.
                </li>
                <li>Use the website to transmit any harmful, malicious, or unlawful content.</li>
              </ul>
              <p>
                Any breach of these terms may result in restricted access, suspension, or legal
                action where necessary.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Products and Services</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                Kobam&apos;s Agro Solutions specializes in crop farming, agricultural research and
                technology, agro marketing, produce preservation, and the export of agricultural
                commodities, including but not limited to cocoa, palm kernel oil, coconut, soya
                beans, ginger, turmeric, and other cash crops.
              </p>
              <p>
                All product descriptions, images, and pricing details displayed on this website are
                provided for informational purposes only and are subject to change without prior
                notice.
              </p>
              <p>
                While every effort is made to ensure that the information presented is accurate and
                up-to-date, Kobam&apos;s Agro Solutions does not warrant that all product details,
                specifications, or availability statuses are error-free or complete.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Orders and Enquiries</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                All product orders and enquiries can be made through our Contact Form, or by
                reaching out to us directly via Email or Telephone, as listed on this website.
              </p>
              <p>
                All enquiries and order requests are subject to review, product availability, and
                compliance with applicable export or import regulations.
              </p>
              <p>
                Kobam&apos;s Agro Solutions reserves the right to accept or decline any order or
                request at its sole discretion.
              </p>
              <p>
                No order shall be deemed accepted until a formal confirmation has been communicated
                to the customer.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Intellectual Property Rights
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                All content on this website, including but not limited to text, logos, images,
                graphics, icons, design layout, and other visual or written materials, is the
                exclusive property of Kobam&apos;s Agro Solutions or its authorized licensors and is
                protected under applicable copyright, trademark, and intellectual property laws.
              </p>
              <p>
                You may not copy, reproduce, distribute, transmit, display, or modify any part of
                this website&apos;s content without the prior written consent of Kobam&apos;s Agro
                Solutions.
              </p>
              <p>
                Any unauthorized use of the content may result in civil and/or criminal liability
                under applicable laws.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Limitation of Liability</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                Kobam&apos;s Agro Solutions shall not be held liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of or related to the use of
                this website, its content, or the services provided.
              </p>
              <p>
                We make no guarantees that the website will be uninterrupted, secure, or error-free.
                Additionally, we do not warrant that any defects will be corrected or that the
                website or its servers are free from viruses, malware, or other harmful components.
              </p>
              <p>
                Users are solely responsible for implementing sufficient procedures and safeguards
                to satisfy their requirements for data security, accuracy, and backup.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                6
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Privacy and Data Protection</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We collect and process personal data in accordance with our{' '}
                <Link href="/privacy" className="text-[#184504] hover:underline font-semibold">
                  Privacy Policy
                </Link>
                .
              </p>
              <p>
                By using this website, you consent to the collection, storage, and processing of
                your personal information as described in our Privacy Policy.
              </p>
              <p>Your data will only be used for legitimate business purposes, such as:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responding to inquiries</li>
                <li>Improving user experience</li>
                <li>Providing relevant updates about our products and services</li>
              </ul>
              <p>
                We are committed to maintaining the confidentiality and security of your personal
                information.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                7
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Termination of Access</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                Kobam&apos;s Agro Solutions reserves the right to suspend or terminate access to
                this website at any time, without prior notice, if you violate these Terms or engage
                in any activity deemed harmful to the website, its users, or the company.
              </p>
              <p>
                Upon termination, all provisions of these Terms that by their nature should survive
                termination, including, but not limited to, intellectual property rights,
                disclaimers, and limitation of liability, shall remain in full effect.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                8
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Governing Law</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                These Terms are governed by and construed in accordance with the laws of the Federal
                Republic of Nigeria.
              </p>
              <p>
                Any disputes arising out of or relating to the use of this website or its services
                shall be subject to the exclusive jurisdiction of the courts of Nigeria.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                9
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Changes to Terms</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                Kobam&apos;s Agro Solutions reserves the right to update, modify, or revise these
                Terms at any time without prior notice.
              </p>
              <p>
                All updates will be posted on this page with a revised effective date. Continued use
                of this website after any modifications constitutes your acceptance of the updated
                Terms.
              </p>
              <p>
                Users are encouraged to review this page periodically to stay informed of any
                changes.
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                10
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Contact Us</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                If you wish to send any notice under these Terms, or have any questions, concerns,
                or complaints regarding our services, you may contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="font-semibold text-gray-900 mb-2">Kobam&apos;s Agro Solutions</p>
                <p>Email: support@kobamsagrosolutions.com</p>
                <p>Phone: +234 (0) 123 456 7890</p>
                <p>Address: 123 Agricultural Way, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
