'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { CATEGORIES, getCategoryIcon } from '@/lib/utils'

export function CategoryFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category') || 'All'

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category === 'All') {
      params.delete('category')
    } else {
      params.set('category', category)
    }
    params.delete('page')
    router.push(`/products?${params.toString()}`)
  }

  return (
    <nav className="mb-8" aria-label="Product categories">
      <div className="flex gap-2 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide" role="tablist">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={currentCategory === category}
            onClick={() => handleCategoryChange(category)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              currentCategory === category
                ? 'bg-emerald text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-navy border border-slate-100'
            }`}
          >
            <span aria-hidden="true">{getCategoryIcon(category)}</span>
            <span>{category}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}