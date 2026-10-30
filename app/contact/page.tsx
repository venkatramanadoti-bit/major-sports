'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Mail, Phone, MapPin, MessageSquare, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { getWhatsAppNumber, getGoogleMapsUrl, buildGeneralEnquiryUrl } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contact Us - MAJOR SPORTS',
  description: 'Contact MAJOR SPORTS in Medchal, Secunderabad. Reach us via WhatsApp, phone, or visit our store. Get directions and enquire about products.',
  openGraph: {
    title: 'Contact Us - MAJOR SPORTS',
    description: 'Contact MAJOR SPORTS in Medchal, Secunderabad.',
    type: 'website',
  },
}

const contactInfo = {
  address: {
    name: 'MAJOR SPORTS',
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
  email: 'majorsportsmedchal@gmail.com',
  hours: {
    weekdays: '10:00 AM - 9:00 PM',
    saturday: '10:00 AM - 9:00 PM',
    sunday: '11:00 AM - 7:00 PM',
  },
  mapsUrl: getGoogleMapsUrl(),
  whatsappUrl: `https://wa.me/${getWhatsAppNumber()}`,
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('submitting')
    setSubmitMessage('')

    // Simulate form submission - in production this would go to a backend/Formspree/Netlify Forms
    await new Promise(resolve => setTimeout(resolve, 1500))

    // For GitHub Pages static site, we can't process forms server-side
    // Show success with WhatsApp alternative
    setSubmitStatus('success')
    setSubmitMessage('Your message has been prepared! Click the button below to send it via WhatsApp.')

    // Build WhatsApp URL with form data
    const whatsappMessage = `Hi MAJOR SPORTS! 👋

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from MAJOR SPORTS website contact form`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${getWhatsAppNumber()}?text=${encodedMessage}`

    // Store the WhatsApp URL for the button
    ;(window as any).contactWhatsAppUrl = whatsappUrl
  }

  const handleSendViaWhatsApp = () => {
    const url = (window as any).contactWhatsAppUrl
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4 text-center">
          <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have questions? We\'d love to hear from you. Reach out via WhatsApp, phone, or visit our store in Medchal.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 -mt-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-8">
              <div className="p-3 bg-emerald/10 rounded-lg w-fit mb-4">
                <MapPin className="w-6 h-6 text-emerald" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Visit Our Store</h3>
              <address className="not-italic text-slate-600 space-y-2 mb-6 leading-relaxed">
                <p className="font-medium text-navy">{contactInfo.address.name}</p>
                <p>{contactInfo.address.line1}</p>
                <p>{contactInfo.address.line2}</p>
                <p>{contactInfo.address.line3}</p>
                <p>{contactInfo.address.city}, {contactInfo.address.state}</p>
                <p>{contactInfo.address.pincode}, {contactInfo.address.country}</p>
              </address>
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white text-sm font-medium rounded-lg hover:bg-navy-light transition-colors"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-8">
              <div className="p-3 bg-emerald/10 rounded-lg w-fit mb-4">
                <Phone className="w-6 h-6 text-emerald" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Call Us</h3>
              <div className="space-y-3 mb-6">
                <a href={`tel:${contactInfo.phone}`} className="text-slate-600 hover:text-navy transition-colors font-medium">
                  {contactInfo.phone}
                </a>
                <p className="text-sm text-slate-500">Available during store hours</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>Store Hours</span>
                </div>
                <dl className="space-y-1 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <dt>Mon - Fri</dt>
                    <dd className="font-medium text-navy">{contactInfo.hours.weekdays}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Saturday</dt>
                    <dd className="font-medium text-navy">{contactInfo.hours.saturday}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sunday</dt>
                    <dd className="font-medium text-navy">{contactInfo.hours.sunday}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-8">
              <div className="p-3 bg-emerald/10 rounded-lg w-fit mb-4">
                <MessageSquare className="w-6 h-6 text-emerald" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">WhatsApp Us</h3>
              <p className="text-slate-600 mb-4">
                Fastest way to reach us! Chat directly for product enquiries, availability checks, and orders.
              </p>
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-emerald text-white font-semibold rounded-lg hover:bg-emerald-dark transition-colors w-full justify-center mb-3"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                Start WhatsApp Chat
              </a>
              <p className="text-sm text-slate-500 text-center">
                Or scan QR code with WhatsApp
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>

              <div className="mb-6 p-4 bg-amber/50 border border-amber/20 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-sm text-amber-dark">
                    <p className="font-medium mb-1">Note: Static Site Limitation</p>
                    <p>This is a static GitHub Pages website. Form submissions cannot be processed server-side.
                    Your message will be prepared and you can send it instantly via WhatsApp with one click.</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Your full name"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="+91 98765 43210"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-field cursor-pointer"
                      aria-required="true"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Enquiry">Product Enquiry</option>
                      <option value="Availability Check">Availability Check</option>
                      <option value="Price Enquiry">Price Enquiry</option>
                      <option value="Store Visit">Store Visit</option>
                      <option value="Bulk Order">Bulk / Corporate Order</option>
                      <option value="Feedback">Feedback / Suggestion</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell us what you're looking for..."
                    aria-required="true"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="flex-1 px-6 py-4 bg-emerald text-white font-semibold rounded-lg hover:bg-emerald-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitStatus === 'submitting' && <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />}
                    {submitStatus !== 'submitting' && <Mail className="w-5 h-5" aria-hidden="true" />}
                    <span>
                      {submitStatus === 'submitting' ? 'Preparing...' : 'Prepare & Send via WhatsApp'}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ name: '', phone: '', email: '', subject: '', message: '' })}
                    className="px-6 py-4 bg-white text-slate-600 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    Clear Form
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald/50 border border-emerald/20 rounded-xl animate-slide-up">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="text-sm text-emerald-dark">
                        <p className="font-medium mb-2">{submitMessage}</p>
                        <button
                          type="button"
                          onClick={handleSendViaWhatsApp}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald text-white text-sm font-medium rounded-lg hover:bg-emerald-dark transition-colors"
                        >
                          <MessageSquare className="w-4 h-4" aria-hidden="true" />
                          Send via WhatsApp Now
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl animate-slide-up">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="text-sm text-red-700">
                        <p className="font-medium">Something went wrong</p>
                        <p>Please try again or contact us directly via WhatsApp.</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-navy mb-6">Quick Enquiry Options</h2>
              <p className="text-slate-600 mb-6">
                Choose a quick option to start a WhatsApp chat with a pre-filled message.
              </p>

              <div className="space-y-3">
                {[
                  { label: 'General Enquiry', icon: MessageSquare },
                  { label: 'Product Availability', icon: Mail },
                  { label: 'Price Quote', icon: Phone },
                  { label: 'Store Visit', icon: MapPin },
                  { label: 'Bulk/Corporate Order', icon: Clock },
                ].map((option, index) => (
                  <a
                    key={index}
                    href={buildGeneralEnquiryUrl(`Hi MAJOR SPORTS! 👋

I would like to make a ${option.label.toLowerCase()}.

Please assist me with this.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    <div className="p-2 bg-emerald/10 rounded-lg">
                      <option.icon className="w-5 h-5 text-emerald" aria-hidden="true" />
                    </div>
                    <span className="font-medium text-navy">{option.label}</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="font-semibold text-navy mb-4">For Production Use</h3>
                <p className="text-sm text-slate-600 mb-4">
                  This demo uses WhatsApp for contact. For a production website, consider integrating:
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald" aria-hidden="true" />
                    Formspree / Netlify Forms / EmailJS for form handling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald" aria-hidden="true" />
                    Backend API with database (Node.js, Python, etc.)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald" aria-hidden="true" />
                    CRM integration (HubSpot, Zoho, etc.)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald" aria-hidden="true" />
                    Email service (SendGrid, Resend, etc.)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? WhatsApp us!
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What are your store hours?',
                a: 'We\'re open Monday-Saturday 10:00 AM - 9:00 PM, and Sunday 11:00 AM - 7:00 PM. Hours may vary on holidays.'
              },
              {
                q: 'Do you offer online ordering and delivery?',
                a: 'Currently we offer WhatsApp-based ordering with in-store pickup. We\'re working on adding delivery options soon.'
              },
              {
                q: 'Can I check product availability before visiting?',
                a: 'Yes! Use the WhatsApp button on any product page or contact us directly. We\'ll check real-time stock for you.'
              },
              {
                q: 'Do you provide racket stringing services?',
                a: 'Yes, we offer professional racket stringing for badminton and tennis rackets with various string options.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept cash, UPI, credit/debit cards, and bank transfers. WhatsApp orders can be paid on pickup.'
              },
              {
                q: 'Do you have warranty on products?',
                a: 'All products carry manufacturer warranties. We\'re an authorized dealer for all brands we carry.'
              },
              {
                q: 'Can I return or exchange products?',
                a: 'Returns/exchanges within 7 days with original packaging and receipt. Conditions apply - check with staff.'
              },
              {
                q: 'Do you sponsor local teams or events?',
                a: 'Yes! We actively support local sports clubs, school teams, and tournaments. Contact us for sponsorship enquiries.'
              },
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-medium text-navy pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-slate-600 animate-slide-down">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}