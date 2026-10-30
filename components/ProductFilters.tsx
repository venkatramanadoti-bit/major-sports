'use client'

import { Search, Filter, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CATEGORIES } from '@/lib/utils'

interface ProductFiltersProps {
  brands: string[]
}

export function ProductFilters({ brands }: ProductFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [search, setSearch] = useState(searchParams.get('search') || '')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get('brand') || '')
  const [stockStatus, setStockStatus] = useState(searchParams.get('stock') || '')
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'featured')

  const hasActiveFilters = selectedCategory || selectedBrand || stockStatus || search

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    if (search) {
      params.set('search', search)
    } else {
      params.delete('search')
    }
    params.delete('page')
    router.push(`/products?${params.toString()}`)
  }

  const handleFilterChange = () => {
    const params = new URLSearchParams(searchParams.toString())
    if (selectedCategory) params.set('category', selectedCategory)
    else params.delete('category')
    if (selectedBrand) params.set('brand', selectedBrand)
    else params.delete('brand')
    if (stockStatus) params.set('stock', stockStatus)
    else params.delete('stock')
    if (sortBy !== 'featured') params.set('sort', sortBy)
    else params.delete('sort')
    params.delete('page')
    router.push(`/products?${params.toString()}`)
  }

  const clearFilters = () => {
    setSearch('')
    setSelectedCategory('')
    setSelectedBrand('')
    setStockStatus('')
    setSortBy('featured')
    const params = new URLSearchParams(searchParams.toString())
    params.delete('search')
    params.delete('category')
    params.delete('brand')
    params.delete('stock')
    params.delete('sort')
    params.delete('page')
    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="mb-6" role="search" aria-label="Product filters">
      <form onSubmit={handleSearch} className="mb-4 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" aria-hidden="true" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-transparent"
            aria-label="Search products"
          />
        </div>
      </form>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex-1 md:hidden">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-colors ${
              hasActiveFilters
                ? 'bg-emerald text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
            aria-expanded={showFilters}
            aria-controls="filter-panel"
          >
            <Filter className="w-5 h-5" aria-hidden="true" />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-white/30 text-emerald rounded-full text-xs flex items-center justify-center">
                ✓
              </span>
            )}
          </button>
        </div>

        <div className="hidden md:flex md:flex-1 gap-2">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" aria-hidden="true" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-transparent"
              aria-label="Search products"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value)
              handleFilterChange()
            }}
            className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-transparent cursor-pointer"
            aria-label="Filter by category"
          >
            <option value="">All Categories</option>
            {CATEGORIES.filter(c => c !== 'All').map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrand(e.target.value)
              handleFilterChange()
            }}
            className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-transparent cursor-pointer"
            aria-label="Filter by brand"
          >
            <option value="">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>

          <select
            value={stockStatus}
            onChange={(e) => {
              setStockStatus(e.target.value)
              handleFilterChange()
            }}
            className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-transparent cursor-pointer"
            aria-label="Filter by stock status"
          >
            <option value="">All Stock</option>
            <option value="in">In Stock</option>
            <option value="out">Out of Stock</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value)
              handleFilterChange()
            }}
            className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-transparent cursor-pointer"
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="name_asc">Name: A-Z</option>
            <option value="name_desc">Name: Z-A</option>
          </select>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="px-4 py-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors flex items-center gap-2"
              aria-label="Clear all filters"
            >
              <X className="w-4 h-4" aria-hidden="true" />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>

      {showFilters && (
        <div id="filter-panel" className="md:hidden mt-4 p-4 bg-white border border-slate-200 rounded-xl space-y-4 animate-slide-down">
          <div>
            <label htmlFor="mobile-search" className="block text-sm font-medium text-slate-700 mb-2">Search</label>
            <input
              id="mobile-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="mobile-category" className="block text-sm font-medium text-slate-700 mb-2">Category</label>
            <select
              id="mobile-category"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value)
                handleFilterChange()
              }}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-transparent cursor-pointer"
            >
              <option value="">All Categories</option>
              {CATEGORIES.filter(c => c !== 'All').map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="mobile-brand" className="block text-sm font-medium text-slate-700 mb-2">Brand</label>
            <select
              id="mobile-brand"
              value={selectedBrand}
              onChange={(e) => {
                setSelectedBrand(e.target.value)
                handleFilterChange()
              }}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-transparent cursor-pointer"
            >
              <option value="">All Brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="mobile-stock" className="block text-sm font-medium text-slate-700 mb-2">Stock Status</label>
            <select
              id="mobile-stock"
              value={stockStatus}
              onChange={(e) => {
                setStockStatus(e.target.value)
                handleFilterChange()
              }}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-transparent cursor-pointer"
            >
              <option value="">All Stock</option>
              <option value="in">In Stock</option>
              <option value="out">Out of Stock</option>
            </select>
          </div>

          <div>
            <label htmlFor="mobile-sort" className="block text-sm font-medium text-slate-700 mb-2">Sort By</label>
            <select
              id="mobile-sort"
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value)
                handleFilterChange()
              }}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-transparent cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="name_asc">Name: A-Z</option>
              <option value="name_desc">Name: Z-A</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="w-full px-4 py-3 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              <X className="w-4 h-4" aria-hidden="true" />
              <span>Clear All Filters</span>
            </button>
          )}
        </div>
      )}
    </div>
  )
}