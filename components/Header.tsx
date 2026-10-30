'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, MessageSquare, MapPin, ShoppingBag } from 'lucide-react'
import { getWhatsAppNumber, getGoogleMapsUrl } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/store', label: 'Store' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const whatsappUrl = `https://wa.me/${getWhatsAppNumber()}`
  const mapsUrl = getGoogleMapsUrl()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link
            href="/"
            className="flex items-center gap-2 text-navy font-bold text-xl md:text-2xl tracking-tight"
            aria-label="MAJOR SPORTS - Home"
          >
            <ShoppingBag className="w-7 h-7 text-emerald" aria-hidden="true" />
            <span>MAJOR SPORTS</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-navy'
                    : 'text-slate-600 hover:text-navy'
                }`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
                {pathname === link.href && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-emerald text-white text-sm font-medium rounded-lg hover:bg-emerald-dark transition-colors"
              aria-label="Contact us on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-navy text-white text-sm font-medium rounded-lg hover:bg-navy-light transition-colors"
              aria-label="Get directions to our store"
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Directions</span>
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-emerald/10 text-emerald'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-200">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald text-white font-medium rounded-lg hover:bg-emerald-dark transition-colors"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-navy text-white font-medium rounded-lg hover:bg-navy-light transition-colors"
              >
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}