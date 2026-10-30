'use client'

import { useState, useEffect, Suspense } from 'react'
import { ProductGrid } from '@/components/ProductGrid'
import { ProductFilters } from '@/components/ProductFilters'
import { CategoryFilter } from '@/components/CategoryFilter'
import { getDemoProducts, getAllBrands, filterProducts, sortProducts, searchProducts, getAllCategories } from '@/lib/demo-data'

function FiltersWrapper({ brands }: { brands: string[] }) {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 mb-8">
      <Suspense fallback={<div className="h-64 animate-pulse bg-slate-50 rounded-xl" />}>
        <CategoryFilter />
        <ProductFilters brands={brands} />
      </Suspense>
    </div>
  )
}

export function ProductList() {
  const brands = getAllBrands()
  const [products, setProducts] = useState(getDemoProducts())
  const [searchParams, setSearchParams] = useState({
    search: '',
    category: '',
    brand: '',
    stock: '',
    sort: 'featured',
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const newParams = {
      search: params.get('search') || '',
      category: params.get('category') || '',
      brand: params.get('brand') || '',
      stock: params.get('stock') || '',
      sort: params.get('sort') || 'featured',
    }
    setSearchParams(newParams)
    applyFilters(newParams)
  }, [])

  const applyFilters = (params: typeof searchParams) => {
    let filtered = getDemoProducts()

    if (params.search) {
      filtered = searchProducts(params.search)
    }

    filtered = filterProducts(filtered, {
      category: params.category,
      brand: params.brand,
      stock: params.stock,
    })

    filtered = sortProducts(filtered, params.sort)
    setProducts(filtered)
  }

  const handleSearch = (search: string) => {
    const newParams = { ...searchParams, search }
    setSearchParams(newParams)
    const params = new URLSearchParams(window.location.search)
    if (search) params.set('search', search)
    else params.delete('search')
    params.delete('page')
    window.history.pushState({}, '', `/products?${params.toString()}`)
    applyFilters(newParams)
  }

  const handleFilterChange = (filters: Partial<typeof searchParams>) => {
    const newParams = { ...searchParams, ...filters }
    setSearchParams(newParams)
    const params = new URLSearchParams(window.location.search)
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value)
      else params.delete(key)
    })
    params.delete('page')
    window.history.pushState({}, '', `/products?${params.toString()}`)
    applyFilters(newParams)
  }

  const handleClearFilters = () => {
    const newParams = { search: '', category: '', brand: '', stock: '', sort: 'featured' }
    setSearchParams(newParams)
    window.history.pushState({}, '', '/products')
    applyFilters(newParams)
  }

  const hasActiveFilters = searchParams.category || searchParams.brand || searchParams.stock || searchParams.search

  return (
    <div>
      <FiltersWrapper brands={brands} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-slate-600">
            Showing <span className="font-semibold text-navy">{products.length}</span> of <span className="font-semibold text-navy">{getDemoProducts().length}</span> products
          </span>
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="text-sm text-emerald hover:text-emerald-dark font-medium flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear filters
            </button>
          )}
        </div>
      </div>

      <ProductGrid
        products={products}
        emptyMessage={searchParams.search ? `No products found for "${searchParams.search}"` : 'No products match your filters'}
      />
    </div>
  )
}