'use client'

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import { ProductGrid } from '@/components/ProductGrid'
import { ProductFilters } from '@/components/ProductFilters'
import { CategoryFilter } from '@/components/CategoryFilter'
import { getDemoProducts, getAllBrands, filterProducts, sortProducts, searchProducts, getAllCategories } from '@/lib/demo-data'

export const metadata: Metadata = {
  title: 'Products - MAJOR SPORTS',
  description: 'Browse our complete catalog of sports equipment including badminton, cricket, football, fitness gear, and accessories. Filter by category, brand, price, and stock status.',
  openGraph: {
    title: 'Products - MAJOR SPORTS',
    description: 'Browse our complete catalog of sports equipment.',
    type: 'website',
  },
}

export default function ProductsPage() {
  const allProducts = getDemoProducts()
  const brands = getAllBrands()
  const categories = getAllCategories()

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="products-heading">
        <div className="container mx-auto px-4 text-center">
          <h1 id="products-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of sports equipment and accessories.
            All products shown are demo inventory - please verify availability via WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 -mt-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 mb-8">
            <CategoryFilter />
            <ProductFilters brands={brands} />
          </div>

          <ProductSearchResults />
        </div>
      </section>
    </div>
  )
}

function ProductSearchResults() {
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