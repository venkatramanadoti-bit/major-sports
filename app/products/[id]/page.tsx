import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft, CheckCircle, XCircle, Truck, Shield, Star, MessageSquare, Share2 } from 'lucide-react'
import Link from 'next/link'
import { getProductById, getDemoProducts } from '@/lib/demo-data'
import { getWhatsAppNumber, getGoogleMapsUrl, buildProductEnquiryUrl, formatPrice } from '@/lib/utils'

interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const product = getProductById(resolvedParams.id)

  if (!product) {
    return {
      title: 'Product Not Found - MAJOR SPORTS',
    }
  }

  return {
    title: `${product.name} - MAJOR SPORTS`,
    description: product.description,
    openGraph: {
      title: `${product.name} - MAJOR SPORTS`,
      description: product.description,
      type: 'website',
      images: product.image ? [{ url: product.image, alt: product.name }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - MAJOR SPORTS`,
      description: product.description,
      images: product.image ? [product.image] : [],
    },
  }
}

export async function generateStaticParams() {
  const products = getDemoProducts()
  return products.map(product => ({
    id: product.id,
  }))
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = await params
  const product = getProductById(resolvedParams.id)

  if (!product) {
    notFound()
  }

  const enquiryUrl = buildProductEnquiryUrl(product as any)
  const whatsappUrl = `https://wa.me/${getWhatsAppNumber()}`
  const mapsUrl = getGoogleMapsUrl()
  const relatedProducts = getDemoProducts()
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      <nav className="py-4 bg-slate-50" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-slate-500" role="list">
            <li>
              <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/products" className="hover:text-navy transition-colors">Products</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={`/products?category=${product.category}`} className="hover:text-navy transition-colors">
                {product.category}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-navy font-medium truncate max-w-xs" aria-current="page">
              {product.name}
            </li>
          </ol>
        </div>
      </nav>

      <section className="py-12 md:py-16" aria-labelledby="product-name">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 shadow-soft">
                {product.imageUrl ? (
                  <a
                    href={product.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-square"
                    aria-label={`View larger image of ${product.name}`}
                  >
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                    />
                  </a>
                ) : product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full w-full text-slate-300">
                    <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                {product.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-amber text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex gap-4" role="group" aria-label="Product actions">
                <button
                  className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 font-medium"
                  aria-label="Share product"
                >
                  <Share2 className="w-5 h-5" aria-hidden="true" />
                  <span>Share</span>
                </button>
                <a
                  href={enquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-emerald text-white rounded-xl hover:bg-emerald-dark transition-colors flex items-center justify-center gap-2 font-medium"
                  aria-label={`Enquire about ${product.name} on WhatsApp`}
                >
                  <MessageSquare className="w-5 h-5" aria-hidden="true" />
                  <span>Enquire</span>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald/10 text-emerald text-sm font-medium rounded-full">
                  {product.category}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
                  {product.brand}
                </span>
              </div>

              <h1 id="product-name" className="text-3xl md:text-4xl font-bold text-navy">
                {product.name}
              </h1>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-navy">{formatPrice(product.price)}</span>
                <div className="flex items-center gap-2">
                  {product.inStock ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-emerald" aria-hidden="true" />
                      <span className="text-emerald font-medium">In Stock</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-red-500" aria-hidden="true" />
                      <span className="text-red-500 font-medium">Out of Stock</span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed">{product.description}</p>

              <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-navy">Key Features</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" aria-hidden="true" />
                    <span>Demo product - inventory not verified</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" aria-hidden="true" />
                    <span>Contact via WhatsApp for actual availability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" aria-hidden="true" />
                    <span>Visit store to see product in person</span>
                  </li>
                  {product.specifications && (
                    <>
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <li key={key} className="flex items-center gap-2">
                          <span className="w-5 h-5 text-emerald flex-shrink-0">✓</span>
                          <span><strong>{key}:</strong> {value}</span>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>

              {product.specifications && (
                <div className="border-t border-slate-200 pt-6">
                  <h3 className="font-semibold text-navy mb-4">Specifications</h3>
                  <dl className="grid grid-cols-2 gap-4 text-sm">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="bg-slate-50 rounded-lg p-4">
                        <dt className="text-slate-500 mb-1">{key}</dt>
                        <dd className="font-medium text-navy">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              <div className="border-t border-slate-200 pt-6 space-y-4">
                <h3 className="font-semibold text-navy">Purchase Options</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href={enquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-emerald text-white font-semibold rounded-lg hover:bg-emerald-dark transition-colors"
                    aria-label={`Enquire about ${product.name} on WhatsApp`}
                  >
                    <MessageSquare className="w-5 h-5" aria-hidden="true" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
                  >
                    <Truck className="w-5 h-5" aria-hidden="true" />
                    <span>Visit Store</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-slate-600">
                  <Shield className="w-5 h-5 text-emerald" aria-hidden="true" />
                  <span className="text-sm">Quality Assured</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Truck className="w-5 h-5 text-emerald" aria-hidden="true" />
                  <span className="text-sm">Store Pickup</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Star className="w-5 h-5 text-amber" aria-hidden="true" />
                  <span className="text-sm">Expert Advice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-16 bg-slate-50" aria-labelledby="related-heading">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 id="related-heading" className="text-2xl md:text-3xl font-bold text-navy">
                You May Also Like
              </h2>
              <Link
                href={`/products?category=${product.category}`}
                className="text-emerald hover:text-emerald-dark font-medium flex items-center gap-1"
              >
                View all {product.category}
                <ArrowLeft className="w-4 h-4 rotate-180" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <article
                  key={relatedProduct.id}
                  className="group bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
                >
                  <Link href={`/products/${relatedProduct.id}`} className="block">
                    <div className="relative aspect-square overflow-hidden bg-slate-50">
                      {relatedProduct.imageUrl ? (
                        <a
                          href={relatedProduct.imageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block aspect-square"
                          aria-label={`View larger image of ${relatedProduct.name}`}
                        >
                          <Image
                            src={relatedProduct.imageUrl}
                            alt={relatedProduct.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                            unoptimized
                          />
                        </a>
                      ) : relatedProduct.image ? (
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          loading="lazy"
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
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                          {relatedProduct.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-navy text-base line-clamp-1 group-hover:text-emerald transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xl font-bold text-navy">{formatPrice(relatedProduct.price)}</span>
                        <span className={`text-sm font-medium ${relatedProduct.inStock ? 'text-emerald' : 'text-red-500'}`}>
                          {relatedProduct.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-navy text-white" aria-labelledby="visit-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="visit-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Visit Our Store
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Experience the products in person at our Medchal store. Get expert advice and find the perfect gear for your sport.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-semibold rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Truck className="w-5 h-5" aria-hidden="true" />
              Get Directions
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald text-white font-semibold rounded-lg hover:bg-emerald-dark transition-colors"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}