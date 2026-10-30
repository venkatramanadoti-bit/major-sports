import { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - MAJOR SPORTS',
  description: 'Contact MAJOR SPORTS in Medchal, Secunderabad. Reach us via WhatsApp, phone, or visit our store. Get directions and enquire about products.',
  openGraph: {
    title: 'Contact Us - MAJOR SPORTS',
    description: 'Contact MAJOR SPORTS in Medchal, Secunderabad.',
    type: 'website',
  },
}

export default function ContactPage() {
  return <ContactForm />
}