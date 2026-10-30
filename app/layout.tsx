import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'MAJOR SPORTS - Your Local Sports Gear Hub in Medchal',
  description: 'Explore sports equipment, accessories and gear at MAJOR SPORTS, Medchal. Visit our store or contact us directly for product availability and assistance.',
  keywords: ['sports equipment', 'sports store', 'badminton', 'cricket', 'football', 'fitness', 'gym', 'Medchal', 'Secunderabad'],
  authors: [{ name: 'MAJOR SPORTS' }],
  creator: 'MAJOR SPORTS',
  publisher: 'MAJOR SPORTS',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://venkatramanadoti-bit.github.io/major-sports/',
    siteName: 'MAJOR SPORTS',
    title: 'MAJOR SPORTS - Your Local Sports Gear Hub in Medchal',
    description: 'Explore sports equipment, accessories and gear at MAJOR SPORTS, Medchal. Visit our store or contact us directly for product availability and assistance.',
    images: [
      {
        url: '/images/major-sports-store-1.jpg',
        width: 1200,
        height: 630,
        alt: 'MAJOR SPORTS store interior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAJOR SPORTS - Your Local Sports Gear Hub in Medchal',
    description: 'Explore sports equipment, accessories and gear at MAJOR SPORTS, Medchal.',
    images: ['/images/major-sports-store-1.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans text-slate-900 bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  )
}