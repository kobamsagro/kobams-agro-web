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
    message: '',
  })

  const [charCount, setCharCount] = useState(0)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Quote request:', { ...formData, product: productName })
    // Reset form and close
    setFormData({ name: '', company: '', email: '', phone: '', quantity: '', message: '' })
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
              Send Quote Request
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
