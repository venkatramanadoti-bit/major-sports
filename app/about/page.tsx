import { Metadata } from 'next'
import Image from 'next/image'
import { Trophy, Target, Users, Heart, Shield, Sparkles, MapPin, MessageSquare } from 'lucide-react'
import { getWhatsAppNumber, getGoogleMapsUrl } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About Us - MAJOR SPORTS',
  description: 'Learn about MAJOR SPORTS - your local sports gear hub in Medchal, Secunderabad. Our story, mission, and commitment to serving athletes.',
  openGraph: {
    title: 'About Us - MAJOR SPORTS',
    description: 'Learn about MAJOR SPORTS - your local sports gear hub in Medchal, Secunderabad.',
    type: 'website',
  },
}

const whatsappUrl = `https://wa.me/${getWhatsAppNumber()}`
const mapsUrl = getGoogleMapsUrl()

const values = [
  {
    icon: Heart,
    title: 'Passion for Sports',
    description: 'We live and breathe sports. Every product we carry is selected by athletes who understand what you need to perform your best.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'We partner only with trusted brands and verify every product. Your safety and satisfaction are our top priorities.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'We\'re not just a store - we\'re part of the Medchal sports community. Supporting local athletes is in our DNA.',
  },
  {
    icon: Target,
    title: 'Expert Guidance',
    description: 'Our team includes former players and coaches who can help you choose the right gear for your level and goals.',
  },
  {
    icon: Trophy,
    title: 'Competitive Pricing',
    description: 'We believe quality sports equipment should be accessible. Fair prices without compromising on authenticity.',
  },
  {
    icon: Sparkles,
    title: 'Continuous Improvement',
    description: 'We constantly update our inventory with the latest innovations and listen to customer feedback to serve you better.',
  },
]

const timeline = [
  {
    year: '2020',
    title: 'Founded in Medchal',
    description: 'Started as a small local sports shop with a big vision: to bring quality sports equipment to Medchal athletes.',
  },
  {
    year: '2021',
    title: 'Expanded Product Range',
    description: 'Added badminton, cricket, football, and fitness categories. Became the go-to store for multiple sports.',
  },
  {
    year: '2022',
    title: 'Community Partnerships',
    description: 'Partnered with local schools, clubs, and tournaments. Started sponsoring youth sports programs.',
  },
  {
    year: '2023',
    title: 'Digital Presence Launched',
    description: 'Launched website and WhatsApp ordering. Made it easier for customers to browse and enquire remotely.',
  },
  {
    year: '2024',
    title: 'Recognized Excellence',
    description: 'Awarded "Best Sports Retailer - Medchal" by local business association. 5-star customer rating achieved.',
  },
  {
    year: '2025',
    title: 'Continued Growth',
    description: 'Expanding inventory, improving services, and deepening community connections. The journey continues.',
  },
]

const team = [
  {
    name: 'Venkatesh Rao',
    role: 'Founder & Owner',
    bio: 'Former district-level badminton player with 15+ years in sports retail. Passionate about making quality gear accessible.',
  },
  {
    name: 'Priya Sharma',
    role: 'Store Manager',
    bio: 'Certified fitness trainer and cricket enthusiast. Ensures every customer finds the right equipment for their needs.',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Senior Sales Associate',
    bio: 'Football coach and equipment specialist. Expert in racket stringing, bat knocking, and gear customization.',
  },
  {
    name: 'Anita Reddy',
    role: 'Customer Relations',
    bio: 'Manages WhatsApp enquiries, orders, and after-sales support. Your friendly voice for all product questions.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 md:py-28 bg-navy text-white" aria-labelledby="about-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About MAJOR SPORTS
            </h1>
            <p className="text-slate-300 text-lg mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
              Your trusted local sports gear hub in Medchal, Secunderabad. Since 2020, we\'ve been serving athletes
              with quality equipment, expert advice, and a passion for sports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald text-white font-semibold rounded-lg hover:bg-emerald-dark transition-colors"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                Connect on WhatsApp
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                <MapPin className="w-5 h-5" aria-hidden="true" />
                Visit Our Store
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white" aria-labelledby="mission-heading">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Our Mission
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                To empower every athlete in Medchal and beyond with access to authentic, high-quality sports equipment
                at fair prices, backed by expert guidance and genuine care for their sporting journey.
              </p>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                We believe that the right equipment can transform your game, prevent injuries, and enhance enjoyment.
                Whether you\'re a beginner picking up your first racket or a seasoned competitor chasing championships,
                we\'re here to help you find your perfect match.
              </p>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald/10 rounded-lg">
                  <Target className="w-6 h-6 text-emerald" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-navy">Commitment to Authenticity</p>
                  <p className="text-sm text-slate-500">Every product is sourced from authorized distributors</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <Image
                src="/images/major-sports-store-1.svg"
                alt="MAJOR SPORTS store interior showing our team helping customers"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50" aria-labelledby="values-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Values
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              These principles guide everything we do - from product selection to customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-card border border-slate-100 p-8 hover:shadow-elevated transition-all duration-300"
              >
                <div className="p-3 bg-emerald/10 rounded-lg w-fit mb-4">
                  <value.icon className="w-6 h-6 text-emerald" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white" aria-labelledby="journey-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="journey-heading" className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Journey
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From a small local shop to Medchal\'s premier sports destination.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ol className="relative" role="list">
              <li className="absolute inset-0 w-0.5 bg-emerald/20 hidden lg:block" aria-hidden="true" />
              {timeline.map((item, index) => (
                <li key={item.year} className="relative flex gap-6 mb-12 lg:mb-16">
                  <div className="flex-shrink-0 w-20 lg:w-24 text-right pr-4 lg:pr-6">
                    <span className="text-2xl font-bold text-emerald">{item.year}</span>
                    <span className="absolute top-8 left-0 w-4 h-4 bg-emerald rounded-full border-4 border-white lg:left-auto lg:right-0 -translate-x-1/2 lg:translate-x-1/2" aria-hidden="true" />
                  </div>
                  <div className="flex-1 bg-white rounded-2xl shadow-card border border-slate-100 p-6 lg:pl-8">
                    <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-navy text-white" aria-labelledby="team-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="team-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Passionate athletes and experts dedicated to your sporting success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-emerald/30 to-navy flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-emerald text-sm font-medium mb-3">{member.role}</p>
                <p className="text-slate-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50" aria-labelledby="location-heading">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <Image
                src="/images/major-sports-store-2.svg"
                alt="MAJOR SPORTS store interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 id="location-heading" className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Find Us in Medchal
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Located in the heart of Medchal, our store is easily accessible from all parts of Secunderabad.
                We\'re right next to Sakshi Pharmacy, near the Shivaji Statue in NJR KLR Nagar.
              </p>
              <address className="not-italic text-slate-600 space-y-2 mb-8">
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
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
                >
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                  Get Directions
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald text-white font-semibold rounded-lg hover:bg-emerald-dark transition-colors"
                >
                  <MessageSquare className="w-5 h-5" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}