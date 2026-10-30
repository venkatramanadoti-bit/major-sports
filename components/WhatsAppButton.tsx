'use client'

import { useState } from 'react'
import { MessageSquare, X, ChevronRight } from 'lucide-react'
import { buildGeneralEnquiryUrl } from '@/lib/utils'

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const enquiryUrl = buildGeneralEnquiryUrl()

  return (
    <div className="fixed bottom-6 right-6 z-50" role="region" aria-label="WhatsApp contact">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center gap-3 p-3 bg-emerald text-white rounded-2xl shadow-elevated transition-all duration-300 hover:shadow-[0_0_0_4px_rgba(16,185,129,0.3)] ${
          isExpanded ? 'pr-6' : 'pr-3'
        }`}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
      >
        <MessageSquare className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline font-medium whitespace-nowrap">
          {isExpanded ? 'Ask Store Manager' : 'Ask MAJOR SPORTS'}
        </span>
        {isExpanded && (
          <ChevronRight
            className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
            style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)' }}
            aria-hidden="true"
          />
        )}
      </button>

      {isExpanded && (
        <div className="absolute bottom-full right-0 mb-4 w-72 md:w-80 bg-white rounded-2xl shadow-elevated border border-slate-100 overflow-hidden animate-scale-in" role="dialog" aria-label="WhatsApp chat options">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-navy">MAJOR SPORTS</p>
                <p className="text-sm text-slate-500">Typically replies within minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="p-4 space-y-3">
            <p className="text-sm text-slate-600">
              Hi! How can we help you today?
            </p>

            <a
              href={enquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-3"
            >
              <MessageSquare className="w-5 h-5 text-emerald flex-shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-700">General Enquiry</span>
            </a>

            <a
              href="/products"
              className="block w-full text-left px-4 py-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <span className="text-sm font-medium text-slate-700">Browse Products</span>
            </a>

            <a
              href="/store"
              className="block w-full text-left px-4 py-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium text-slate-700">Store Location</span>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}