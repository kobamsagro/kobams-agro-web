'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface RequestQuoteDialogProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
}

export function RequestQuoteDialog({ isOpen, onClose, productName }: RequestQuoteDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '',
    containerSize: '',
    shippingPreference: '',
    packagingOption: '',
    message: '',
  })

  const [charCount, setCharCount] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          product: productName || 'General Quote',
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Quote request submitted successfully!',
        })
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          quantity: '',
          containerSize: '',
          shippingPreference: '',
          packagingOption: '',
          message: '',
        })
        setCharCount(0)
        // Close dialog after 2 seconds
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
        }, 2000)
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit quote request. Please try again.',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (value.length <= 500) {
      setFormData({ ...formData, message: value })
      setCharCount(value.length)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D5016]">Request Quote</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close dialog"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#2D5016] mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-[#2D5016] mb-2">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2D5016] mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#2D5016] mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-[#2D5016] mb-2">
                Quantity (MT) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="quantity"
                required
                min="5"
                placeholder="Minimum: 5"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent placeholder:text-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="containerSize"
                className="block text-sm font-medium text-[#2D5016] mb-2"
              >
                Container Size <span className="text-red-500">*</span>
              </label>
              <select
                id="containerSize"
                required
                value={formData.containerSize}
                onChange={(e) => setFormData({ ...formData, containerSize: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent bg-white"
              >
                <option value="">Select container size</option>
                <option value="20ft">20ft Container</option>
                <option value="40ft">40ft Container</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="shippingPreference"
                className="block text-sm font-medium text-[#2D5016] mb-2"
              >
                Shipping Preference <span className="text-red-500">*</span>
              </label>
              <select
                id="shippingPreference"
                required
                value={formData.shippingPreference}
                onChange={(e) => setFormData({ ...formData, shippingPreference: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent bg-white"
              >
                <option value="">Select shipping preference</option>
                <option value="FOB">FOB (Free on Board)</option>
                <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                <option value="CFR">CFR (Cost and Freight)</option>
                <option value="EXW">EXW (Ex Works)</option>
                <option value="DDP">DDP (Delivered Duty Paid)</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="packagingOption"
                className="block text-sm font-medium text-[#2D5016] mb-2"
              >
                Packaging Option <span className="text-red-500">*</span>
              </label>
              <select
                id="packagingOption"
                required
                value={formData.packagingOption}
                onChange={(e) => setFormData({ ...formData, packagingOption: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent bg-white"
              >
                <option value="">Select packaging option</option>
                <option value="PP Bags">PP Bags</option>
                <option value="Bulk">Bulk</option>
                <option value="Jute Bags">Jute Bags</option>
                <option value="Custom Packaging">Custom Packaging</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#2D5016] mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Additional requirements or questions..."
                value={formData.message}
                onChange={handleMessageChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent placeholder:text-gray-400 resize-none"
              />
              <div className="text-right text-sm text-gray-400 mt-1">{charCount}/500</div>
            </div>

            {submitStatus && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#F4C430] hover:bg-[#E5B520] text-[#2D5016] font-semibold py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Send Quote Request'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
