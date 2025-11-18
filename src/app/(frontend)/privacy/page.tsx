import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy | Kobam's Agro Solutions",
  description:
    "Learn how Kobam's Agro Solutions collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-200">
            Last updated on October 15, 2024 | Effective Date: October 15, 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Section 1 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a4d2e] text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">About this Notice</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                At Kobam's Agro Solutions, we are committed to protecting your privacy and ensuring
                the security of your personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you visit our website,
                use our services, or engage with us in any way.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our services, you
                acknowledge that you have read, understood, and agree to be bound by the terms of
                this Privacy Policy. If you do not agree with our policies and practices, please do
                not use our services.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a4d2e] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                What Information Do We Collect
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We collect various types of information in connection with the services we provide,
                including:
              </p>
              <p className="font-semibold">Personal Information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number, and postal address</li>
                <li>Company name and business information</li>
                <li>Payment and billing information</li>
                <li>Account credentials and preferences</li>
              </ul>
              <p className="font-semibold mt-4">Technical Information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address, browser type, and operating system</li>
                <li>Device identifiers and mobile network information</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Website usage data and analytics</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a4d2e] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Information that you provide
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>We collect information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Register for an account on our website</li>
                <li>Place an order or request a quote for our products</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Contact us through our contact forms or customer support channels</li>
                <li>Participate in surveys, contests, or promotional activities</li>
                <li>Submit testimonials, reviews, or feedback</li>
                <li>Apply for employment or business partnerships</li>
              </ul>
              <p className="mt-4">
                The information you provide must be accurate, complete, and current. You are
                responsible for maintaining the confidentiality of your account credentials and for
                all activities that occur under your account.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a4d2e] text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Information from third-party Sources
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We may receive information about you from third-party sources to enhance our
                services and improve your experience. These sources may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Business Partners:</strong> Information from agricultural cooperatives,
                  distributors, and trade organizations
                </li>
                <li>
                  <strong>Public Databases:</strong> Publicly available business directories and
                  trade registries
                </li>
                <li>
                  <strong>Social Media Platforms:</strong> Information from your public social media
                  profiles when you interact with us
                </li>
                <li>
                  <strong>Payment Processors:</strong> Transaction and verification information from
                  financial institutions
                </li>
                <li>
                  <strong>Marketing Partners:</strong> Demographic and interest data from marketing
                  and analytics providers
                </li>
              </ul>
              <p className="mt-4">
                We combine this information with the data we collect directly from you to provide
                better services and personalized experiences.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a4d2e] text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Information we automatically collect
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                When you access our website or use our services, we automatically collect certain
                information through various technologies:
              </p>
              <p className="font-semibold">Log Files:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and geographic location</li>
                <li>Browser type, version, and language settings</li>
                <li>Operating system and device information</li>
                <li>Date and time of access</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website addresses</li>
              </ul>
              <p className="font-semibold mt-4">Cookies and Tracking Technologies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Session cookies to maintain your login state</li>
                <li>Persistent cookies to remember your preferences</li>
                <li>Analytics cookies to understand how you use our website</li>
                <li>Marketing cookies to deliver relevant advertisements</li>
              </ul>
              <p className="mt-4">
                You can control cookies through your browser settings, but disabling cookies may
                affect your ability to use certain features of our website.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a4d2e] text-white rounded-full flex items-center justify-center font-bold">
                6
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Use of Information</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We use the information we collect for various legitimate business purposes,
                including:
              </p>
              <p className="font-semibold">Service Delivery:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processing and fulfilling your orders</li>
                <li>Managing your account and providing customer support</li>
                <li>Communicating with you about your transactions</li>
                <li>Delivering products and services you request</li>
              </ul>
              <p className="font-semibold mt-4">Business Operations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improving our products, services, and website functionality</li>
                <li>Conducting market research and analysis</li>
                <li>Developing new products and services</li>
                <li>Managing our business relationships</li>
              </ul>
              <p className="font-semibold mt-4">Marketing and Communications:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sending promotional materials and newsletters (with your consent)</li>
                <li>Personalizing your experience on our website</li>
                <li>Providing product recommendations</li>
                <li>Conducting surveys and gathering feedback</li>
              </ul>
              <p className="font-semibold mt-4">Legal and Security:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Complying with legal obligations and regulations</li>
                <li>Protecting against fraud and security threats</li>
                <li>Enforcing our terms and conditions</li>
                <li>Resolving disputes and legal claims</li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a4d2e] text-white rounded-full flex items-center justify-center font-bold">
                7
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Legal Rights</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                Under applicable data protection laws, including GDPR and other privacy regulations,
                you have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Right to Access:</strong> Request a copy of the personal information we
                  hold about you
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Request correction of inaccurate or
                  incomplete information
                </li>
                <li>
                  <strong>Right to Erasure:</strong> Request deletion of your personal information
                  (subject to legal obligations)
                </li>
                <li>
                  <strong>Right to Restrict Processing:</strong> Request limitation on how we use
                  your information
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Receive your data in a structured,
                  machine-readable format
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to processing of your information for
                  certain purposes
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time
                  where we rely on consent
                </li>
                <li>
                  <strong>Right to Lodge a Complaint:</strong> File a complaint with a supervisory
                  authority
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us using the information provided in
                the Contact Us section. We will respond to your request within the timeframe
                required by applicable law.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a4d2e] text-white rounded-full flex items-center justify-center font-bold">
                8
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                How We Share Your Information
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We may share your information with third parties in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who perform services on
                  our behalf (payment processing, shipping, marketing)
                </li>
                <li>
                  <strong>Business Partners:</strong> Agricultural cooperatives, distributors, and
                  suppliers involved in fulfilling your orders
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or
                  government authority
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or
                  sale of assets
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly authorize us to share your
                  information
                </li>
              </ul>
              <p className="mt-4">
                We require all third parties to respect the security of your personal information
                and treat it in accordance with applicable laws.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a4d2e] text-white rounded-full flex items-center justify-center font-bold">
                9
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Your Rights and Choices</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>You have several choices regarding how we collect and use your information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account Information:</strong> Update your account details at any time by
                  logging into your account settings
                </li>
                <li>
                  <strong>Marketing Communications:</strong> Opt out of promotional emails by
                  clicking the unsubscribe link or contacting us directly
                </li>
                <li>
                  <strong>Cookies:</strong> Manage cookie preferences through your browser settings
                  or our cookie consent tool
                </li>
                <li>
                  <strong>Location Data:</strong> Disable location services through your device
                  settings
                </li>
                <li>
                  <strong>Push Notifications:</strong> Disable notifications through your device or
                  app settings
                </li>
              </ul>
              <p className="mt-4">
                Please note that opting out of certain communications may affect our ability to
                provide you with important service-related information.
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a4d2e] text-white rounded-full flex items-center justify-center font-bold">
                10
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Data Security and Retention</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We implement comprehensive security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest using industry-standard protocols</li>
                <li>Secure servers with firewalls and intrusion detection systems</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and security practices</li>
              </ul>
              <p className="mt-4 font-semibold">Data Retention:</p>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes
                outlined in this Privacy Policy, unless a longer retention period is required or
                permitted by law. When we no longer need your information, we will securely delete
                or anonymize it.
              </p>
              <p className="mt-4">
                Despite our security measures, no method of transmission over the internet or
                electronic storage is 100% secure. While we strive to protect your information, we
                cannot guarantee absolute security.
              </p>
            </div>
          </div>

          {/* Section 11 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a4d2e] text-white rounded-full flex items-center justify-center font-bold">
                11
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Changes to this Privacy Policy
              </h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices, technologies, legal requirements, or other factors. When we make changes,
                we will:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Update the "Last Updated" date at the top of this policy</li>
                <li>Post the revised policy on our website</li>
                <li>
                  Notify you via email or prominent notice on our website for material changes
                </li>
                <li>Obtain your consent if required by applicable law</li>
              </ul>
              <p className="mt-4">
                We encourage you to review this Privacy Policy periodically to stay informed about
                how we are protecting your information. Your continued use of our services after any
                changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </div>
          </div>

          {/* Section 12 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a4d2e] text-white rounded-full flex items-center justify-center font-bold">
                12
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Contact Us</h2>
            </div>
            <div className="ml-14 text-gray-700 space-y-4">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or
                our data practices, please don't hesitate to contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="font-semibold text-gray-900 mb-2">Kobam's Agro Solutions</p>
                <p className="mb-1">
                  <strong>Email:</strong> privacy@kobamsagro.com
                </p>
                <p className="mb-1">
                  <strong>Phone:</strong> +234 (0) 123 456 7890
                </p>
                <p className="mb-1">
                  <strong>Address:</strong> 123 Agricultural Way, Lagos, Nigeria
                </p>
                <p className="mt-4 text-sm">
                  <strong>Data Protection Officer:</strong> dpo@kobamsagro.com
                </p>
              </div>
              <p className="mt-4">
                We will respond to your inquiry within 30 days or as required by applicable law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
