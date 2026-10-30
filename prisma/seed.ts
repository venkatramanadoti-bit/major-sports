import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const demoProducts: Prisma.ProductCreateInput[] = [
  {
    name: 'Yonex Astrox 100 ZZ Badminton Racket',
    brand: 'Yonex',
    category: 'Badminton',
    description: 'Professional grade badminton racket with Namd graphite shaft and Rotational Generator System for maximum power and control.',
    price: 24999.00,
    image: 'https://images.unsplash.com/photo-1626234913298-2d0e2a5c4d5d?w=600&h=600&fit=crop',
    inStock: true,
    featured: true,
  },
  {
    name: 'Yonex Nanoray 10F Badminton Racket',
    brand: 'Yonex',
    category: 'Badminton',
    description: 'Lightweight racket designed for fast swing speeds and precise shot placement. Ideal for intermediate players.',
    price: 3499.00,
    image: 'https://images.unsplash.com/photo-1626234913298-2d0e2a5c4d5d?w=600&h=600&fit=crop',
    inStock: true,
    featured: true,
  },
  {
    name: 'Yonex Mavis 350 Nylon Shuttlecocks (Tube of 6)',
    brand: 'Yonex',
    category: 'Badminton',
    description: 'Durable nylon shuttlecocks with consistent flight trajectory. Perfect for practice and recreational play.',
    price: 499.00,
    image: 'https://images.unsplash.com/photo-1626234913298-2d0e2a5c4d5d?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'SG Cobra Xtreme Cricket Bat',
    brand: 'SG',
    category: 'Cricket',
    description: 'Premium English willow cricket bat with massive sweet spot and excellent pickup. Used by professional cricketers.',
    price: 18999.00,
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=600&fit=crop',
    inStock: true,
    featured: true,
  },
  {
    name: 'SG Club Cricket Bat',
    brand: 'SG',
    category: 'Cricket',
    description: 'Kashmir willow cricket bat perfect for club and recreational cricket. Great value for money.',
    price: 2999.00,
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'SG Tournament Cricket Balls (Pack of 6)',
    brand: 'SG',
    category: 'Cricket',
    description: 'High quality leather cricket balls with prominent seam. Approved for tournament play.',
    price: 1899.00,
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'Nike Premier League Flight Football',
    brand: 'Nike',
    category: 'Football',
    description: 'Official match ball with Aerowsculpt technology for truer flight. FIFA Quality Pro certified.',
    price: 4999.00,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop',
    inStock: true,
    featured: true,
  },
  {
    name: 'Nike Strike Football',
    brand: 'Nike',
    category: 'Football',
    description: 'Durable training football with 12-panel design for consistent flight and touch.',
    price: 1499.00,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'Spalding NBA Official Game Basketball',
    brand: 'Spalding',
    category: 'Basketball',
    description: 'Official NBA game ball with full-grain leather cover. Ultimate grip and feel for indoor play.',
    price: 12999.00,
    image: 'https://images.unsplash.com/photo-1546519638-68e10957862b?w=600&h=600&fit=crop',
    inStock: true,
    featured: true,
  },
  {
    name: 'Spalding NBA Street Basketball',
    brand: 'Spalding',
    category: 'Basketball',
    description: 'Outdoor basketball with durable rubber cover. Designed for concrete and asphalt courts.',
    price: 1299.00,
    image: 'https://images.unsplash.com/photo-1546519638-68e10957862b?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'Wilson US Open Tennis Racket',
    brand: 'Wilson',
    category: 'Tennis',
    description: 'Performance tennis racket with BLX technology for reduced vibration. Great for intermediate players.',
    price: 14999.00,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=600&fit=crop',
    inStock: true,
    featured: true,
  },
  {
    name: 'Wilson Championship Tennis Balls (Can of 3)',
    brand: 'Wilson',
    category: 'Tennis',
    description: 'Official US Open tennis balls with premium felt for consistent bounce and durability.',
    price: 599.00,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'Stiga Evolution Table Tennis Racket',
    brand: 'Stiga',
    category: 'Table Tennis',
    description: 'ITTF approved racket with 5-ply blade and premium rubber. Perfect for competitive play.',
    price: 3499.00,
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'Mikasa V200W Volleyball',
    brand: 'Mikasa',
    category: 'Volleyball',
    description: 'FIVB approved competition volleyball with 18-panel design. Official ball for international tournaments.',
    price: 4999.00,
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&h=600&fit=crop',
    inStock: true,
    featured: true,
  },
  {
    name: 'Cosco Super Volley Volleyball',
    brand: 'Cosco',
    category: 'Volleyball',
    description: 'Durable synthetic leather volleyball for recreational and training use.',
    price: 899.00,
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'Nike Air Zoom Pegasus 40 Running Shoes',
    brand: 'Nike',
    category: 'Sports Shoes',
    description: 'Responsive running shoes with Zoom Air unit and React foam. Ideal for daily training.',
    price: 10999.00,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    inStock: true,
    featured: true,
  },
  {
    name: 'Adidas Ultraboost 24 Running Shoes',
    brand: 'Adidas',
    category: 'Sports Shoes',
    description: 'Premium running shoes with Boost midsole for energy return. Continental rubber outsole for grip.',
    price: 15999.00,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    inStock: false,
    featured: true,
  },
  {
    name: 'Under Armour HeatGear Compression Shirt',
    brand: 'Under Armour',
    category: 'Sportswear',
    description: 'Lightweight compression shirt with moisture-wicking fabric. Keeps you cool during intense workouts.',
    price: 1999.00,
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'Nike Dri-FIT Training Shorts',
    brand: 'Nike',
    category: 'Sportswear',
    description: 'Breathable training shorts with Dri-FIT technology. Mesh panels for ventilation.',
    price: 1499.00,
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'Yonex Super Grap Overgrip (Pack of 3)',
    brand: 'Yonex',
    category: 'Accessories',
    description: 'Tacky overgrip for enhanced racket control. Absorbs sweat for consistent grip.',
    price: 399.00,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'Skipping Rope with Counter',
    brand: 'Generic',
    category: 'Fitness & Gym',
    description: 'Adjustable speed rope with built-in jump counter. Bearings for smooth rotation.',
    price: 299.00,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'Resistance Bands Set (5 Levels)',
    brand: 'Generic',
    category: 'Fitness & Gym',
    description: 'Set of 5 resistance bands with varying tension. Includes door anchor and handles.',
    price: 799.00,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'Yoga Mat with Carrying Strap',
    brand: 'Generic',
    category: 'Fitness & Gym',
    description: 'Non-slip yoga mat with 6mm thickness. Eco-friendly TPE material with alignment lines.',
    price: 999.00,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'Dumbbell Set 20kg (Pair)',
    brand: 'Generic',
    category: 'Fitness & Gym',
    description: 'Adjustable dumbbell set with spin-lock collars. Chrome finish with knurled grip.',
    price: 3499.00,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop',
    inStock: false,
    featured: false,
  },
  {
    name: 'Football Pump with Needle',
    brand: 'Generic',
    category: 'Accessories',
    description: 'Double-action ball pump with flexible hose and needle adapter. Compact and portable.',
    price: 199.00,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'Sports Water Bottle 1L',
    brand: 'Generic',
    category: 'Accessories',
    description: 'BPA-free sports water bottle with leak-proof lid and carrying handle. Time markers for hydration tracking.',
    price: 349.00,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
  {
    name: 'Badminton Net with Poles',
    brand: 'Generic',
    category: 'Badminton',
    description: 'Official size badminton net with steel poles and tension system. Easy setup for home or court.',
    price: 2499.00,
    image: 'https://images.unsplash.com/photo-1626234913298-2d0e2a5c4d5d?w=600&h=600&fit=crop',
    inStock: true,
    featured: false,
  },
]

async function main() {
  console.log('🌱 Starting database seed...')

  // Clear existing data
  await prisma.product.deleteMany()
  await prisma.storeSettings.deleteMany()
  await prisma.contactEnquiry.deleteMany()
  await prisma.adminSession.deleteMany()

  // Create store settings
  await prisma.storeSettings.create({
    data: {
      storeName: 'MAJOR SPORTS',
      address: 'Phase B, Plot No. 44 Part, Next to Sakshi Pharmacy, Near Shivaji Statue, NJR KLR Nagar, Medchal, Secunderabad, Telangana 501401',
      phone: '',
      whatsappNumber: '06302324007',
      googleMapsUrl: 'https://maps.app.goo.gl/bcFHEGuExfcXQLDK8?g_st=aw',
      openingHours: 'Mon-Sat: 10:00 AM - 8:00 PM | Sun: 11:00 AM - 6:00 PM',
      shortDescription: 'Your local sports gear hub in Medchal, Secunderabad. Explore sports equipment, accessories and gear.',
      heroHeading: 'Your Local Sports Gear Hub',
      heroDescription: 'Explore sports equipment, accessories and gear at MAJOR SPORTS, Medchal. Visit our store or contact us directly for product availability and assistance.',
    },
  })

  // Create products
  for (const product of demoProducts) {
    await prisma.product.create({ data: product })
  }

  console.log(`✅ Seeded ${demoProducts.length} products`)
  console.log('✅ Created store settings')
  console.log('🌱 Database seed completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })