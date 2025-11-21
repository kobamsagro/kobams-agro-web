import React from 'react'
import type { Metadata } from 'next'

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
              <h2 className="text-2xl font-bold text-gray-900 mt-1">About this Notice</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                Welcome to Kobam&apos;s Agro Solutions. These Terms and Conditions
                (&ldquo;Terms&rdquo;) govern your access to and use of our website, products, and
                services. By accessing or using our services, you agree to be bound by these Terms.
                If you do not agree with any part of these Terms, please do not use our services.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. Any changes will be
                effective immediately upon posting on our website. Your continued use of our
                services after any modifications constitutes your acceptance of the updated Terms.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                What Information Do We Collect
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We collect information that you provide directly to us, including but not limited
                to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Personal identification information (name, email address, phone number, company
                  name)
                </li>
                <li>Business information related to agricultural product inquiries and orders</li>
                <li>Payment and billing information for transactions</li>
                <li>Communication preferences and feedback</li>
                <li>
                  Technical information such as IP address, browser type, and device information
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Information that you provide
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                When you register for an account, place an order, request a quote, or communicate
                with us, you may provide us with information including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact details for business communications</li>
                <li>Product specifications and order requirements</li>
                <li>Shipping and delivery addresses</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Testimonials, reviews, and feedback about our products and services</li>
              </ul>
              <p className="mt-4">
                You are responsible for ensuring that the information you provide is accurate,
                complete, and up-to-date. We are not liable for any issues arising from inaccurate
                or incomplete information.
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
                Information from third-party Sources
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We may receive information about you from third-party sources, including business
                partners, marketing agencies, and public databases. This information may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Business contact information from trade directories</li>
                <li>Market research and industry insights</li>
                <li>
                  Social media profile information (if you interact with us on social platforms)
                </li>
                <li>Credit and payment verification information from financial institutions</li>
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
                Information we automatically collect
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                When you access our website or use our services, we automatically collect certain
                information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Log data (IP address, browser type, operating system, access times)</li>
                <li>Device information (device type, unique device identifiers)</li>
                <li>Usage data (pages visited, features used, time spent on pages)</li>
                <li>Location data (general geographic location based on IP address)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                6
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Use of Information</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processing and fulfilling your orders and requests</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Improving our products, services, and website functionality</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Conducting market research and analysis</li>
                <li>Ensuring compliance with legal and regulatory requirements</li>
                <li>Detecting and preventing fraud and security threats</li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                7
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Legal Rights</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>Under applicable data protection laws, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to or restrict processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us using the information provided in
                the Contact Us section below.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                8
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">How We Use Your Information</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                Your information is used to provide, maintain, and improve our services. We may also
                use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personalize your experience on our website</li>
                <li>Send you updates about your orders and account</li>
                <li>Provide you with relevant product recommendations</li>
                <li>Conduct surveys and gather feedback</li>
                <li>Comply with legal obligations and enforce our policies</li>
              </ul>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                9
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Your Rights and Choices</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>You have several choices regarding your information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account Information:</strong> You can update your account information at
                  any time by logging into your account
                </li>
                <li>
                  <strong>Marketing Communications:</strong> You can opt out of receiving marketing
                  emails by clicking the unsubscribe link in any email
                </li>
                <li>
                  <strong>Cookies:</strong> You can control cookies through your browser settings
                </li>
                <li>
                  <strong>Data Deletion:</strong> You can request deletion of your account and
                  personal data by contacting us
                </li>
              </ul>
            </div>
          </div>

          {/* Section 10 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                10
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Data Security and Retention</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the internet is 100% secure.
              </p>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes
                outlined in these Terms, unless a longer retention period is required by law.
              </p>
            </div>
          </div>

          {/* Section 11 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#184504] text-white rounded-full flex items-center justify-center font-bold">
                11
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Changes to this Privacy Policy
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We may update these Terms from time to time to reflect changes in our practices or
                for legal, operational, or regulatory reasons. We will notify you of any material
                changes by posting the updated Terms on our website and updating the &ldquo;Last
                Updated&rdquo; date.
              </p>
              <p>
                We encourage you to review these Terms periodically to stay informed about how we
                are protecting your information.
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
                If you have any questions, concerns, or requests regarding these Terms and
                Conditions or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="font-semibold text-gray-900 mb-2">Kobam&apos;s Agro Solutions</p>
                <p>Email: info@kobamsagro.com</p>
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
