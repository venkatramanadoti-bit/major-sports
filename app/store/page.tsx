import { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, MessageSquare, Clock, Phone, ArrowRight, Shield, Star, Truck, Users, Building2 } from 'lucide-react'
import { getWhatsAppNumber, getGoogleMapsUrl } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Visit Our Store - MAJOR SPORTS',
  description: 'Visit MAJOR SPORTS in Medchal, Secunderabad. Find our location, hours, and get directions to our sports equipment store.',
  openGraph: {
    title: 'Visit Our Store - MAJOR SPORTS',
    description: 'Visit MAJOR SPORTS in Medchal, Secunderabad.',
    type: 'website',
    images: [
      {
        url: '/images/major-sports-store-interior.svg',
        width: 1200,
        height: 800,
        alt: 'MAJOR SPORTS store interior',
      },
    ],
  },
}

const storeInfo = {
  name: 'MAJOR SPORTS',
  address: {
    line1: 'Phase B, Plot No. 44 Part',
    line2: 'Next to Sakshi Pharmacy',
    line3: 'Near Shivaji Statue, NJR KLR Nagar',
    city: 'Medchal',
    state: 'Telangana',
    pincode: '501401',
    country: 'India',
  },
  phone: '+91 63023 24007',
  whatsapp: getWhatsAppNumber(),
  hours: {
    weekdays: '10:00 AM - 9:00 PM',
    saturday: '10:00 AM - 9:00 PM',
    sunday: '11:00 AM - 7:00 PM',
  },
  mapsUrl: getGoogleMapsUrl(),
  whatsappUrl: `https://wa.me/${getWhatsAppNumber()}`,
}

export default function StorePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="store-heading">
        <div className="container mx-auto px-4 text-center">
          <h1 id="store-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Visit Our Store
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Experience our complete range of sports equipment in person at our Medchal location.
            Get expert advice, try products before you buy, and find the perfect gear for your sport.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 -mt-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-soft p-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 text-emerald rounded-full text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  Find Us
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                  MAJOR SPORTS, Medchal
                </h2>

                <address className="not-italic text-slate-600 space-y-3 mb-8 leading-relaxed">
                  <p className="font-medium text-navy text-lg">{storeInfo.name}</p>
                  <p>{storeInfo.address.line1}</p>
                  <p>{storeInfo.address.line2}</p>
                  <p>{storeInfo.address.line3}</p>
                  <p>{storeInfo.address.city}, {storeInfo.address.state}</p>
                  <p>{storeInfo.address.pincode}, {storeInfo.address.country}</p>
                </address>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={storeInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
                  >
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                    Get Directions
                  </a>
                  <a
                    href={storeInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-emerald text-white font-semibold rounded-lg hover:bg-emerald-dark transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" aria-hidden="true" />
                    WhatsApp Us
                  </a>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="font-semibold text-navy mb-4">Store Hours</h3>
                  <dl className="space-y-3 text-slate-600">
                    <div className="flex justify-between">
                      <dt>Monday - Friday</dt>
                      <dd className="font-medium text-navy">{storeInfo.hours.weekdays}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Saturday</dt>
                      <dd className="font-medium text-navy">{storeInfo.hours.saturday}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Sunday</dt>
                      <dd className="font-medium text-navy">{storeInfo.hours.sunday}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-soft p-8">
                <h3 className="text-xl font-bold text-navy mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${storeInfo.phone}`}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <div className="p-3 bg-emerald/10 rounded-lg">
                      <Phone className="w-5 h-5 text-emerald" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Call Us</p>
                      <p className="font-medium text-navy">{storeInfo.phone}</p>
                    </div>
                  </a>
                  <a
                    href={storeInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <div className="p-3 bg-emerald/10 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-emerald" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">WhatsApp</p>
                      <p className="font-medium text-navy">Chat with us directly</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <Image
                  src="/images/major-sports-store-1.svg"
                  alt="MAJOR SPORTS store exterior showing the storefront and location in Medchal"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <Image
                  src="/images/major-sports-store-interior.svg"
                  alt="MAJOR SPORTS store interior showing badminton rackets, cricket bats, footballs, fitness equipment and accessories on display shelves"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50" aria-labelledby="why-visit-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="why-visit-heading" className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Visit In-Store?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Online browsing is convenient, but nothing beats the in-store experience for sports equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏸',
                title: 'Try Before You Buy',
                description: 'Test rackets, feel the grip, check the weight and balance. Find what feels right for your game.',
              },
              {
                icon: '👨‍🏫',
                title: 'Expert Advice',
                description: 'Our knowledgeable staff can recommend the right equipment for your skill level and playing style.',
              },
              {
                icon: '📦',
                title: 'Immediate Availability',
                description: 'Take your gear home today. No waiting for delivery or worrying about shipping damages.',
              },
              {
                icon: '🔧',
                title: 'Custom Services',
                description: 'Racket stringing, grip replacement, and equipment customization available on-site.',
              },
              {
                icon: '🤝',
                title: 'Local Community',
                description: 'Connect with fellow athletes, learn about local tournaments, and join our sports community.',
              },
              {
                icon: '💰',
                title: 'Exclusive Offers',
                description: 'In-store promotions, bundle deals, and loyalty discounts you won\'t find online.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-card border border-slate-100 p-8 hover:shadow-elevated transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Visit MAJOR SPORTS Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="visit-premium-heading">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/major-sports-store-interior.svg"
                alt="MAJOR SPORTS store interior - spacious showroom with badminton rackets, cricket equipment, football gear, fitness machines and sports accessories"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-emerald/90 text-white text-sm font-medium rounded-full backdrop-blur-sm flex items-center gap-2">
                    <Shield className="w-4 h-4" aria-hidden="true" />
                    Quality Assured
                  </span>
                  <span className="px-4 py-2 bg-white/90 text-navy text-sm font-medium rounded-full backdrop-blur-sm flex items-center gap-2">
                    <Truck className="w-4 h-4" aria-hidden="true" />
                    Store Pickup
                  </span>
                  <span className="px-4 py-2 bg-amber/90 text-white text-sm font-medium rounded-full backdrop-blur-sm flex items-center gap-2">
                    <Star className="w-4 h-4" aria-hidden="true" />
                    Expert Advice
                  </span>
                  <span className="px-4 py-2 bg-white/90 text-navy text-sm font-medium rounded-full backdrop-blur-sm flex items-center gap-2">
                    <Users className="w-4 h-4" aria-hidden="true" />
                    Local Community
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 text-emerald rounded-full text-sm font-medium">
                <Building2 className="w-4 h-4" aria-hidden="true" />
                Visit MAJOR SPORTS
              </div>

              <h2 id="visit-premium-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
                Experience Sports Gear Like Never Before
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                Step into our Medchal showroom and discover a curated selection of premium sports equipment across badminton, cricket, football, fitness, and accessories. Touch, feel, and test before you buy.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-card border border-slate-100 hover:shadow-elevated transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Prime Location</h3>
                    <p className="text-slate-600 text-sm">Phase B, Plot 44, Near Shivaji Statue, Medchal, Secunderabad</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-card border border-slate-100 hover:shadow-elevated transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Extended Hours</h3>
                    <p className="text-slate-600 text-sm">Mon–Sat: 10 AM – 9 PM • Sun: 11 AM – 7 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-card border border-slate-100 hover:shadow-elevated transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Verified Quality</h3>
                    <p className="text-slate-600 text-sm">Authentic products from authorized brand distributors</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-card border border-slate-100 hover:shadow-elevated transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple/10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">WhatsApp Support</h3>
                    <p className="text-slate-600 text-sm">Chat with our experts before you visit</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-200">
                <a
                  href={storeInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-all shadow-lg hover:shadow-xl"
                >
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={storeInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald text-white font-semibold rounded-xl hover:bg-emerald-dark transition-all shadow-lg hover:shadow-xl"
                >
                  <MessageSquare className="w-5 h-5" aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-navy text-white" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Visit?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Get directions to our store or message us on WhatsApp to check product availability before you come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={storeInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-semibold rounded-lg hover:bg-slate-100 transition-colors"
            >
              <MapPin className="w-5 h-5" aria-hidden="true" />
              Get Directions
            </a>
            <a
              href={storeInfo.whatsappUrl}
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