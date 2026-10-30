'use client'

import Image from 'next/image'
import { MessageSquare, CheckCircle, XCircle, Clock } from 'lucide-react'
import { formatPrice, buildProductEnquiryUrl } from '@/lib/utils'
import { DemoProduct } from '@/lib/demo-data'

interface ProductCardProps {
  product: DemoProduct
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const enquiryUrl = buildProductEnquiryUrl(product)
  const isInStock = product.inStock

  return (
    <article
      className="group bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading={priority ? 'eager' : 'lazy'}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        ) : (
          <div className="flex items-center justify-center h-full text-slate-300">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {product.featured && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-amber text-white text-xs font-medium rounded-full">
            Featured
          </span>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label={`Check availability of ${product.name} on WhatsApp`}
          >
            <MessageSquare className="w-5 h-5 text-emerald" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
            {product.category}
          </span>
          {product.brand && (
            <span className="text-slate-400 text-xs">{product.brand}</span>
          )}
        </div>

        <h3 className="font-semibold text-navy text-lg line-clamp-1 group-hover:text-emerald transition-colors">
          {product.name}
        </h3>

        {product.description && (
          <p className="text-slate-500 text-sm line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <div>
            <p className="text-2xl font-bold text-navy">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 mt-1">
              {isInStock ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald" aria-hidden="true" />
                  <span className="text-sm font-medium text-emerald">In Stock</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-red-500" aria-hidden="true" />
                  <span className="text-sm font-medium text-red-500">Out of Stock</span>
                </>
              )}
            </div>
          </div>

          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isInStock
                ? 'bg-emerald text-white hover:bg-emerald-dark'
                : 'bg-slate-100 text-slate-500 cursor-not-allowed'
            }`}
            aria-label={`Check availability of ${product.name} on WhatsApp`}
            aria-disabled={!isInStock}
          >
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </article>
  )
}