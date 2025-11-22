'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface InquiryDialogProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
}

export function InquiryDialog({ isOpen, onClose, productName }: InquiryDialogProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  })

  const [charCount, setCharCount] = useState(0)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Inquiry:', { ...formData, product: productName })
    // Reset form and close
    setFormData({ fullName: '', companyName: '', email: '', phone: '', country: '', message: '' })
    setCharCount(0)
    onClose()
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D5016]">Make an Inquiry</h2>
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
              <label htmlFor="fullName" className="block text-sm font-medium text-[#2D5016] mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-[#2D5016] mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2D5016] mb-2">
                Email Address <span className="text-red-500">*</span>
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
                Phone Number
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
              <label htmlFor="country" className="block text-sm font-medium text-[#2D5016] mb-2">
                Country/Region <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="country"
                required
                placeholder="Enter your country/region"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent placeholder:text-gray-400"
              />
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

            <button
              type="submit"
              className="w-full bg-[#F4C430] hover:bg-[#E5B520] text-[#2D5016] font-semibold py-4 rounded-lg transition-colors"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
