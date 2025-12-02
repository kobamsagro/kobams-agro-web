'use client'
import React, { useState } from 'react'
import { X } from 'lucide-react'
import toast from 'react-hot-toast'

interface InquiryDialogProps {
  isOpen: boolean
  onClose: () => void
  productName: string
}

export default function InquiryDialog({ isOpen, onClose, productName }: InquiryDialogProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    messageType: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          product: productName,
          messageType: formData.messageType,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(data.message || 'Inquiry sent successfully!')
        setFormData({ fullName: '', companyName: '', email: '', phone: '', country: '', messageType: '', message: '' })
        onClose()
      } else {
        toast.error(data.error || 'Failed to submit inquiry. Please try again.')
      }
    } catch (error) {
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-[#184504]">Make an Inquiry</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#184504] focus:border-transparent"
              />
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#184504] focus:border-transparent"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#184504] focus:border-transparent"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#184504] focus:border-transparent"
              />
            </div>

            {/* Country/Region */}
            <div>
              <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
                Country/Region <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your country/region"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#184504] focus:border-transparent"
              />
            </div>

            {/* Message Type */}
            <div>
              <label htmlFor="messageType" className="block text-gray-700 font-medium mb-2">
                Message Type <span className="text-red-500">*</span>
              </label>
              <select
                id="messageType"
                name="messageType"
                value={formData.messageType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#184504] focus:border-transparent bg-white"
              >
                <option value="">Select message type</option>
                <option value="Product Inquiry">Product Inquiry</option>
                <option value="Partnership/Collaboration">Partnership/Collaboration</option>
                <option value="Export Process Questions">Export Process Questions</option>
                <option value="Documentation and Compliance">Documentation and Compliance</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                maxLength={500}
                placeholder="Additional requirements or questions..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#184504] focus:border-transparent resize-none"
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.message.length}/500
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#184504] font-semibold py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
