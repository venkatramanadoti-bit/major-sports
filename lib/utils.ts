import { Product as PrismaProduct } from '@prisma/client'
import { DemoProduct } from './demo-data'

export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '916302324007'
}

export function getGoogleMapsUrl(): string {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || 'https://maps.app.goo.gl/bcFHEGuExfcXQLDK8?g_st=aw'
}

export type ProductForEnquiry = Pick<PrismaProduct, 'name' | 'price' | 'category'> & Pick<DemoProduct, 'name' | 'price' | 'category'>

export function buildProductEnquiryUrl(product: ProductForEnquiry): string {
  const number = getWhatsAppNumber()
  const message = `Hi MAJOR SPORTS! 👋

I am interested in:

Product: ${product.name}
Price: ₹${product.price.toLocaleString('en-IN')}
Category: ${product.category}

I would like to know:

1. Is this item currently available at the Medchal store?
2. What sizes/colors/options are available?
3. What is the quality and durability of this product?
4. Can I visit the store to check it?

Thank you!`

  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encodedMessage}`
}

export function buildGeneralEnquiryUrl(customMessage?: string): string {
  const number = getWhatsAppNumber()
  const message = customMessage || `Hi MAJOR SPORTS! 👋

I would like to know more about your sports products and current availability at the Medchal store.`

  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encodedMessage}`
}

export function formatPrice(price: number | string | { toString(): string }): string {
  const num = typeof price === 'number' ? price : parseFloat(price.toString())
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num)
}

export const CATEGORIES = [
  'All',
  'Badminton',
  'Cricket',
  'Football',
  'Fitness & Gym',
  'Tennis',
  'Table Tennis',
  'Volleyball',
  'Basketball',
  'Sports Shoes',
  'Sportswear',
  'Accessories',
  'Other Sports',
] as const

export type Category = typeof CATEGORIES[number]

export function getCategoryIcon(category: string) {
  const icons: Record<string, string> = {
    Badminton: '🏸',
    Cricket: '🏏',
    Football: '⚽',
    'Fitness & Gym': '💪',
    Tennis: '🎾',
    'Table Tennis': '🏓',
    Volleyball: '🏐',
    Basketball: '🏀',
    'Sports Shoes': '👟',
    Sportswear: '👕',
    Accessories: '🎒',
    'Other Sports': '🏅',
  }
  return icons[category] || '🏷️'
}