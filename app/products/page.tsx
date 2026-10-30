import { Metadata } from 'next'
import { ProductList } from '@/components/ProductList'

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
          <ProductList />
        </div>
      </section>
    </div>
  )
}