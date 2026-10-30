import { Hero } from '@/components/Hero'
import { StoreSection } from '@/components/StoreSection'
import { ProductGrid } from '@/components/ProductGrid'
import { CategoryFilter } from '@/components/CategoryFilter'
import { getDemoProducts, getFeaturedProducts } from '@/lib/demo-data'
import { Suspense } from 'react'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(8)
  const allProducts = getDemoProducts()

  return (
    <>
      <Hero />

      <section className="py-20 md:py-28 bg-slate-50" aria-labelledby="featured-heading">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 id="featured-heading" className="text-3xl md:text-4xl font-bold text-navy mb-2">
                Featured Products
              </h2>
              <p className="text-slate-600 text-lg">
                Handpicked selection of our most popular sports gear
              </p>
            </div>
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors self-start"
            >
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white" aria-labelledby="categories-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="categories-heading" className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Shop by Category
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Find the perfect equipment for your favorite sport. From professional gear to beginner essentials.
            </p>
          </div>
          <Suspense fallback={<div className="h-32 animate-pulse bg-slate-50 rounded-xl" />}>
            <CategoryFilter />
          </Suspense>
        </div>
      </section>

      <StoreSection />

      <section className="py-20 md:py-28 bg-slate-50" aria-labelledby="all-products-heading">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 id="all-products-heading" className="text-3xl md:text-4xl font-bold text-navy mb-2">
                All Products
              </h2>
              <p className="text-slate-600 text-lg">
                Browse our complete catalog of sports equipment and accessories
              </p>
            </div>
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald text-white font-semibold rounded-lg hover:bg-emerald-dark transition-colors self-start"
            >
              Explore Full Catalog
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <ProductGrid
            products={allProducts.slice(0, 12)}
            emptyMessage="No products available at the moment"
          />
        </div>
      </section>
    </>
  )
}