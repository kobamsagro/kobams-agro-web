'use client'
import React, { useState } from 'react'
import { X } from 'lucide-react'
import toast from 'react-hot-toast'

interface RequestQuoteDialogProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  minQuantity?: string
}

export default function RequestQuoteDialog({
  isOpen,
  onClose,
  productName,
  minQuantity = '5',
}: RequestQuoteDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '',
    containerSize: '20ft',
    shippingPreference: 'FOB',
    packagingOption: 'Standard',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          product: productName,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(data.message || 'Quote request sent successfully!')
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          quantity: '',
          containerSize: '20ft',
          shippingPreference: 'FOB',
          packagingOption: 'Standard',
          message: '',
        })
        onClose()
      } else {
        toast.error(data.error || 'Failed to submit request. Please try again.')
      }
    } catch (_error) {
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
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
            <h2 className="text-3xl font-bold text-[#184504]">Request Quote</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#184504] focus:border-transparent"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#184504] focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
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

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone
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

            {/* Quantity */}
            <div>
              <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
                Quantity (MT) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder={`Minimum: ${minQuantity}`}
                min={minQuantity}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#184504] focus:border-transparent"
              />
            </div>

            {/* Container Size */}
            <div>
              <label htmlFor="containerSize" className="block text-gray-700 font-medium mb-2">
                Container Size <span className="text-red-500">*</span>
              </label>
              <select
                id="containerSize"
                name="containerSize"
                value={formData.containerSize}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#184504] focus:border-transparent"
              >
                <option value="20ft">20ft Container</option>
                <option value="40ft">40ft Container</option>
                <option value="40ft-HC">40ft High Cube</option>
              </select>
            </div>

            {/* Shipping Preference */}
            <div>
              <label htmlFor="shippingPreference" className="block text-gray-700 font-medium mb-2">
                Shipping Terms <span className="text-red-500">*</span>
              </label>
              <select
                id="shippingPreference"
                name="shippingPreference"
                value={formData.shippingPreference}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#184504] focus:border-transparent"
              >
                <option value="FOB">FOB (Free on Board)</option>
                <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                <option value="CFR">CFR (Cost and Freight)</option>
                <option value="EXW">EXW (Ex Works)</option>
              </select>
            </div>

            {/* Packaging Option */}
            <div>
              <label htmlFor="packagingOption" className="block text-gray-700 font-medium mb-2">
                Packaging <span className="text-red-500">*</span>
              </label>
              <select
                id="packagingOption"
                name="packagingOption"
                value={formData.packagingOption}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#184504] focus:border-transparent"
              >
                <option value="Standard">Standard Packaging</option>
                <option value="Bulk">Bulk Packaging</option>
                <option value="Custom">Custom Packaging</option>
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
              {isSubmitting ? 'Sending...' : 'Send Quote Request'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
