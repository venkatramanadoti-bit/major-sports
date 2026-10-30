import Link from 'next/link'
import { MessageSquare, MapPin, ShoppingBag, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { getWhatsAppNumber, getGoogleMapsUrl } from '@/lib/utils'

const footerLinks = {
  navigate: [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/store', label: 'Store' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/admin', label: 'Admin' },
  ],
  categories: [
    { href: '/products?category=Badminton', label: 'Badminton' },
    { href: '/products?category=Cricket', label: 'Cricket' },
    { href: '/products?category=Football', label: 'Football' },
    { href: '/products?category=Fitness & Gym', label: 'Fitness & Gym' },
    { href: '/products?category=Tennis', label: 'Tennis' },
    { href: '/products?category=Accessories', label: 'Accessories' },
  ],
}

export function Footer() {
  const whatsappUrl = `https://wa.me/${getWhatsAppNumber()}`
  const mapsUrl = getGoogleMapsUrl()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight mb-4" aria-label="MAJOR SPORTS - Home">
              <ShoppingBag className="w-8 h-8 text-emerald" aria-hidden="true" />
              <span>MAJOR SPORTS</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Your local sports gear hub in Medchal, Secunderabad. Quality equipment for every athlete.
            </p>
            <div className="flex gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-emerald/20 text-emerald rounded-lg hover:bg-emerald/30 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-amber/20 text-amber rounded-lg hover:bg-amber/30 transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navigate</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {footerLinks.navigate.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <nav aria-label="Product categories">
              <ul className="space-y-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Visit Us</h3>
            <address className="text-slate-300 text-sm not-italic leading-relaxed space-y-2">
              <p>MAJOR SPORTS</p>
              <p>Phase B, Plot No. 44 Part</p>
              <p>Next to Sakshi Pharmacy</p>
              <p>Near Shivaji Statue, NJR KLR Nagar</p>
              <p>Medchal, Secunderabad</p>
              <p>Telangana – 501401, India</p>
            </address>
            <div className="mt-4 flex gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-emerald text-white text-sm font-medium rounded-lg hover:bg-emerald-dark transition-colors"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-amber text-white text-sm font-medium rounded-lg hover:bg-amber-dark transition-colors"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Directions
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} MAJOR SPORTS. All rights reserved.
            </p>
            <div className="flex gap-4" aria-label="Social media links">
              <a
                href="#"
                className="p-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}