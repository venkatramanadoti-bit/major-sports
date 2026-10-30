'use client'

import Image from 'next/image'
import { MapPin, MessageSquare, ArrowRight } from 'lucide-react'
import { getWhatsAppNumber, getGoogleMapsUrl } from '@/lib/utils'

const whatsappUrl = `https://wa.me/${getWhatsAppNumber()}`
const mapsUrl = getGoogleMapsUrl()

export function StoreSection() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="store-heading">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] md:aspect-[3/2] rounded-2xl overflow-hidden shadow-elevated">
            <Image
              src="/images/major-sports-store-2.svg"
              alt="MAJOR SPORTS store interior showing badminton rackets, sports equipment, accessories and retail shelving"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald/10 text-emerald rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              Visit Our Store
            </div>

            <h2 id="store-heading" className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Experience MAJOR SPORTS in Person
            </h2>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Visit our physical store in Medchal to browse our complete range of sports equipment, try products before you buy, and get expert advice from our team.
            </p>

            <address className="not-italic text-slate-600 space-y-3 mb-8">
              <p className="font-medium text-navy">MAJOR SPORTS</p>
              <p>Phase B, Plot No. 44 Part</p>
              <p>Next to Sakshi Pharmacy</p>
              <p>Near Shivaji Statue, NJR KLR Nagar</p>
              <p>Medchal, Secunderabad</p>
              <p>Telangana – 501401, India</p>
            </address>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
              >
                <MapPin className="w-5 h-5" aria-hidden="true" />
                Get Directions
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-emerald text-white font-semibold rounded-lg hover:bg-emerald-dark transition-colors"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-navy">10+</p>
                <p className="text-sm text-slate-500">Sports Categories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-navy">50+</p>
                <p className="text-sm text-slate-500">Products in Store</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-navy">5★</p>
                <p className="text-sm text-slate-500">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}