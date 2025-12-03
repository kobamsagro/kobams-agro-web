'use client'
import React from 'react'
import { X, CheckCircle } from 'lucide-react'

interface HighlightDetail {
  title: string
  description: string
  benefits: string[]
  additionalInfo?: string
}

interface HighlightDetailModalProps {
  isOpen: boolean
  onClose: () => void
  highlight: HighlightDetail | null
}

export default function HighlightDetailModal({
  isOpen,
  onClose,
  highlight,
}: HighlightDetailModalProps) {
  if (!isOpen || !highlight) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#184504] mb-2">{highlight.title}</h2>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            >
              <X size={24} />
            </button>
          </div>

          <hr className="mb-6" />

          {/* Key Benefits */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#2d4a1f] mb-4">KEY BENEFITS</h3>
            <div className="space-y-3">
              {highlight.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          {highlight.additionalInfo && (
            <>
              <hr className="mb-6" />
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#2d4a1f] mb-3">ADDITIONAL INFORMATION</h3>
                <p className="text-gray-700">{highlight.additionalInfo}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
