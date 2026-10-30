'use client'

import { ArrowRight, MapPin, MessageSquare, Truck, Shield, Star, ShoppingBag } from 'lucide-react'
import { getWhatsAppNumber, getGoogleMapsUrl } from '@/lib/utils'
import Image from 'next/image'

const whatsappUrl = `https://wa.me/${getWhatsAppNumber()}`
const mapsUrl = getGoogleMapsUrl()

const badges = [
  {
    icon: ShoppingBag,
    title: 'MAJOR SPORTS',
    description: 'Medchal',
  },
  {
    icon: MapPin,
    title: 'Local Sports Store',
    description: 'Sports Equipment & Accessories',
  },
  {
    icon: Truck,
    title: 'Visit Store',
    description: 'Medchal, Secunderabad',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    description: 'Ask about availability',
  },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/major-sports-store-interior.svg"
          alt="MAJOR SPORTS store interior showing badminton rackets, cricket equipment, footballs, fitness gear and sports accessories on display shelves"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/40 to-navy/20" aria-hidden="true" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in"
          >
            Your Local Sports Gear Hub
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '100ms' }}>
            Explore sports equipment, accessories and gear at MAJOR SPORTS, Medchal. Visit our store or contact us directly for product availability and assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <a
              href="/products"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald text-white font-semibold rounded-lg hover:bg-emerald-dark transition-colors text-lg"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-lg border border-white/20"
            >
              <MapPin className="w-5 h-5" aria-hidden="true" />
              Get Directions
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-amber text-white font-semibold rounded-lg hover:bg-amber-dark transition-colors text-lg"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              WhatsApp Store
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '300ms' }} role="list" aria-label="Store information">
            {badges.map((badge, index) => (
              <div
                key={badge.title}
                className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10"
                role="listitem"
              >
                <div className="p-3 bg-emerald/20 rounded-lg">
                  <badge.icon className="w-6 h-6 text-emerald" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white">{badge.title}</p>
                  <p className="text-slate-300 text-sm">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ArrowRight className="w-6 h-6 text-white/50 rotate-90" />
      </div>
    </section>
  )
}