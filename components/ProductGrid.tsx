'use client'

import { ProductCard } from './ProductCard'
import { DemoProduct } from '@/lib/demo-data'

interface ProductGridProps {
  products: DemoProduct[]
  loading?: boolean
  emptyMessage?: string
}

export function ProductGrid({ products, loading = false, emptyMessage = 'No products found' }: ProductGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" role="status" aria-label="Loading products">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden animate-pulse">
            <div className="aspect-square bg-slate-100" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-slate-100 rounded w-3/4" />
              <div className="h-6 bg-slate-100 rounded w-1/2" />
              <div className="h-4 bg-slate-100 rounded w-full" />
              <div className="h-4 bg-slate-100 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16" role="status">
        <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
        <h3 className="text-lg font-medium text-navy mb-2">{emptyMessage}</h3>
        <p className="text-slate-500">Try adjusting your filters or search terms.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" role="list" aria-label="Products">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < 4} />
      ))}
    </div>
  )
}