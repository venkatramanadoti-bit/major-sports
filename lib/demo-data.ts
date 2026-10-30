/**
 * Demo product data for static GitHub Pages deployment.
 * This replaces the Prisma database for the public demo website.
 * All products are clearly marked as demo/unverified inventory.
 */

export interface DemoProduct {
  id: string
  name: string
  description: string
  price: number
  category: string
  brand: string
  image: string
  inStock: boolean
  featured: boolean
  specifications?: Record<string, string>
  tags?: string[]
}

export const DEMO_PRODUCTS: DemoProduct[] = [
  // Badminton
  {
    id: 'badminton-1',
    name: 'Yonex Astrox 77 Pro Badminton Racket',
    description: 'Professional-grade badminton racket with Rotational Generator System for powerful smashes and quick maneuverability. Used by international players.',
    price: 18500,
    category: 'Badminton',
    brand: 'Yonex',
    image: '/images/products/yonex-astrox-77-pro.jpg',
    inStock: true,
    featured: true,
    specifications: {
      'Weight': '83g (4U)',
      'Balance': 'Head Heavy',
      'Flex': 'Extra Stiff',
      'String Tension': '20-28 lbs',
      'Material': 'HM Graphite + Namd + Volume Cut Resin',
    },
    tags: ['professional', 'tournament', 'power'],
  },
  {
    id: 'badminton-2',
    name: 'Li-Ning Aeronaut 9000C Badminton Racket',
    description: 'Advanced aerodynamic frame design for superior swing speed and control. Ideal for attacking players who want precision.',
    price: 14900,
    category: 'Badminton',
    brand: 'Li-Ning',
    image: '/images/products/linning-aeronaut-9000c.jpg',
    inStock: true,
    featured: true,
    specifications: {
      'Weight': '85g (4U)',
      'Balance': 'Even Balance',
      'Flex': 'Stiff',
      'String Tension': '22-30 lbs',
      'Material': 'M50 + M40X + T1100G Carbon Fiber',
    },
    tags: ['control', 'aerodynamic', 'advanced'],
  },
  {
    id: 'badminton-3',
    name: 'Victor Thruster K 9900 Badminton Racket',
    description: 'Power-focused racket with innovative frame technology for explosive smashes. Perfect for aggressive doubles play.',
    price: 16200,
    category: 'Badminton',
    brand: 'Victor',
    image: '/images/products/victor-thruster-k9900.jpg',
    inStock: true,
    featured: false,
    specifications: {
      'Weight': '84g (4U)',
      'Balance': 'Head Heavy',
      'Flex': 'Stiff',
      'String Tension': '21-29 lbs',
      'Material': 'High Modulus Graphite + Nano Fortify TR',
    },
    tags: ['power', 'doubles', 'aggressive'],
  },
  {
    id: 'badminton-4',
    name: 'Yonex Mavis 350 Nylon Shuttlecocks (Tube of 6)',
    description: 'Durable nylon shuttlecocks with consistent flight trajectory. Ideal for practice sessions and recreational play.',
    price: 450,
    category: 'Badminton',
    brand: 'Yonex',
    image: '/images/products/yonex-mavis-350.jpg',
    inStock: true,
    featured: false,
    specifications: {
      'Type': 'Nylon',
      'Speed': 'Medium (Blue Ring)',
      'Quantity': '6 per tube',
      'Durability': 'High',
    },
    tags: ['practice', 'durable', 'recreational'],
  },
  {
    id: 'badminton-5',
    name: 'Li-Ning A+800 Feather Shuttlecocks (Tube of 12)',
    description: 'Premium goose feather shuttlecocks with excellent flight stability. Tournament-grade quality for serious players.',
    price: 1800,
    category: 'Badminton',
    brand: 'Li-Ning',
    image: '/images/products/linning-a800-feather.jpg',
    inStock: false,
    featured: false,
    specifications: {
      'Type': 'Goose Feather',
      'Grade': 'A+',
      'Quantity': '12 per tube',
      'Flight': 'Stable',
    },
    tags: ['tournament', 'feather', 'premium'],
  },

  // Cricket
  {
    id: 'cricket-1',
    name: 'SG Players Edition English Willow Cricket Bat',
    description: 'Handcrafted from premium Grade 1 English Willow. Designed for professional cricketers with massive sweet spot and superior pick-up.',
    price: 42000,
    category: 'Cricket',
    brand: 'SG',
    image: '/images/products/sg-players-edition.jpg',
    inStock: true,
    featured: true,
    specifications: {
      'Willow Grade': 'Grade 1 English Willow',
      'Weight': '1180-1250g',
      'Profile': 'Full Profile with Spine',
      'Handle': '12-piece Singapore Cane',
      'Grip': 'Pro Player Grip',
    },
    tags: ['professional', 'english willow', 'grade 1'],
  },
  {
    id: 'cricket-2',
    name: 'Kookaburra Kahuna Pro Cricket Bat',
    description: 'Iconic bat profile with big edges and pronounced bow. Used by international stars for powerful stroke play.',
    price: 38500,
    category: 'Cricket',
    brand: 'Kookaburra',
    image: '/images/products/kookaburra-kahuna-pro.jpg',
    inStock: true,
    featured: true,
    specifications: {
      'Willow Grade': 'Grade 1 English Willow',
      'Weight': '1160-1240g',
      'Profile': 'Kahuna Profile',
      'Handle': 'Multi-piece Cane',
      'Sweet Spot': 'Mid to Low',
    },
    tags: ['power', 'international', 'big edges'],
  },
  {
    id: 'cricket-3',
    name: 'Gray-Nicolles Legend Cricket Bat',
    description: 'Classic bat shape with traditional craftsmanship. Perfect balance of power and control for all-round batsmen.',
    price: 29900,
    category: 'Cricket',
    brand: 'Gray-Nicolls',
    image: '/images/products/graynicolls-legend.jpg',
    inStock: true,
    featured: false,
    specifications: {
      'Willow Grade': 'Grade 2 English Willow',
      'Weight': '1180-1260g',
      'Profile': 'Traditional Full Profile',
      'Handle': 'Semi-Oval Cane',
    },
    tags: ['traditional', 'all-round', 'control'],
  },
  {
    id: 'cricket-4',
    name: 'SG Tournament Cricket Leather Ball (Box of 6)',
    description: 'Official match-grade leather balls with prominent seam. Used in domestic tournaments and club matches.',
    price: 2400,
    category: 'Cricket',
    brand: 'SG',
    image: '/images/products/sg-tournament-ball.jpg',
    inStock: true,
    featured: false,
    specifications: {
      'Type': '4-piece Leather',
      'Weight': '156g',
      'Circumference': '22.4-22.9 cm',
      'Seam': 'Prominent Hand-stitched',
      'Quantity': '6 per box',
    },
    tags: ['match', 'leather', 'tournament'],
  },
  {
    id: 'cricket-5',
    name: 'DSC Krunch Kashmir Willow Cricket Bat',
    description: 'Affordable Kashmir willow bat for beginners and club cricketers. Good durability and performance for the price.',
    price: 3200,
    category: 'Cricket',
    brand: 'DSC',
    image: '/images/products/dsc-krunch-kashmir.jpg',
    inStock: true,
    featured: false,
    specifications: {
      'Willow Grade': 'Kashmir Willow',
      'Weight': '1150-1250g',
      'Profile': 'Standard Profile',
      'Handle': 'Cane Handle',
    },
    tags: ['beginner', 'kashmir willow', 'budget'],
  },

  // Football
  {
    id: 'football-1',
    name: 'Nike Flight Official Match Ball',
    description: 'Revolutionary Aerowsculpt technology for truer flight. Official match ball for top leagues with 4 fused panels.',
    price: 12500,
    category: 'Football',
    brand: 'Nike',
    image: '/images/products/nike-flight-ball.jpg',
    inStock: true,
    featured: true,
    specifications: {
      'Construction': '4 Fused Panels',
      'Technology': 'Aerowsculpt',
      'Surface': 'Textured Casing',
      'Bladder': 'Rubber Bladder',
      'Certification': 'FIFA Quality Pro',
    },
    tags: ['match', 'official', 'fifa approved'],
  },
  {
    id: 'football-2',
    name: 'Adidas Al Rihla Pro Football',
    description: 'World Cup inspired design with CRT-CORE for accuracy and SPEEDSHELL skin for faster flight. Premium match ball.',
    price: 11800,
    category: 'Football',
    brand: 'Adidas',
    image: '/images/products/adidas-al-rihla-pro.jpg',
    inStock: true,
    featured: true,
    specifications: {
      'Construction': '20 Panel',
      'Technology': 'CRT-CORE + SPEEDSHELL',
      'Surface': 'Textured PU',
      'Bladder': 'Latex Bladder',
      'Certification': 'FIFA Quality Pro',
    },
    tags: ['world cup', 'pro', 'accuracy'],
  },
  {
    id: 'football-3',
    name: 'Puma Future 7 Match Football',
    description: 'Innovative 12-panel design with POE foam layer for soft touch and consistent flight. Great for training and matches.',
    price: 3200,
    category: 'Football',
    brand: 'Puma',
    image: '/images/products/puma-future-7.jpg',
    inStock: true,
    featured: false,
    specifications: {
      'Construction': '12 Panel',
      'Technology': 'POE Foam Layer',
      'Surface': 'TPU Casing',
      'Bladder': 'Rubber Bladder',
      'Certification': 'FIFA Quality',
    },
    tags: ['training', 'match', 'soft touch'],
  },
  {
    id: 'football-4',
    name: 'Nike Tiempo Legend 10 Pro FG Football Boots',
    description: 'Premium kangaroo leather upper with Flyknit construction. Exceptional touch and comfort for playmakers.',
    price: 18500,
    category: 'Football',
    brand: 'Nike',
    image: '/images/products/tiempo-legend-10.jpg',
    inStock: true,
    featured: false,
    specifications: {
      'Upper': 'Kangaroo Leather + Flyknit',
      'Soleplate': 'FG (Firm Ground)',
      'Weight': '215g',
      'Fit': 'Regular',
    },
    tags: ['boots', 'leather', 'playmaker'],
  },
  {
    id: 'football-5',
    name: 'Adidas Predator Accuracy.1 FG Football Boots',
    description: 'HybridTouch 2.0 upper with Strikeskin fins for enhanced ball control. Designed for precision and swerve.',
    price: 19500,
    category: 'Football',
    brand: 'Adidas',
    image: '/images/products/predator-accuracy.jpg',
    inStock: false,
    featured: false,
    specifications: {
      'Upper': 'HybridTouch 2.0',
      'Soleplate': 'FG (Firm Ground)',
      'Technology': 'Strikeskin Fins',
      'Weight': '220g',
    },
    tags: ['boots', 'control', 'precision'],
  },

  // Fitness & Gym
  {
    id: 'fitness-1',
    name: 'Bowflex SelectTech 552 Adjustable Dumbbells (Pair)',
    description: 'Space-saving adjustable dumbbells replacing 15 sets of weights. Dial system adjusts from 2.5kg to 24kg in seconds.',
    price: 34900,
    category: 'Fitness & Gym',
    brand: 'Bowflex',
    image: '/images/products/bowflex-selecttech-552.jpg',
    inStock: true,
    featured: true,
    specifications: {
      'Weight Range': '2.5kg - 24kg (5-52.5 lbs)',
      'Increments': '2.5kg (5 lbs)',
      'Replaces': '15 sets of dumbbells',
      'Dimensions': '40 x 20 x 23 cm each',
      'Warranty': '2 years',
    },
    tags: ['adjustable', 'space-saving', 'home gym'],
  },
  {
    id: 'fitness-2',
    name: 'Decathlon Domyos 500 Folding Treadmill',
    description: 'Compact folding treadmill with 1.5 HP motor, 12 incline levels, and 16 pre-set programs. Perfect for home cardio.',
    price: 42900,
    category: 'Fitness & Gym',
    brand: 'Domyos',
    image: '/images/products/domyos-500-treadmill.jpg',
    inStock: true,
    featured: true,
    specifications: {
      'Motor': '1.5 HP Continuous',
      'Speed Range': '1-16 km/h',
      'Incline': '0-12% (12 levels)',
      'Running Surface': '120 x 40 cm',
      'Max User Weight': '130 kg',
      'Folded Dimensions': '160 x 75 x 30 cm',
    },
    tags: ['treadmill', 'folding', 'home cardio'],
  },
  {
    id: 'fitness-3',
    name: 'Rogue Echo Bike V3.0',
    description: 'Air resistance fan bike with belt drive for smooth, quiet operation. Built for high-intensity interval training.',
    price: 68900,
    category: 'Fitness & Gym',
    brand: 'Rogue',
    image: '/images/products/rogue-echo-bike.jpg',
    inStock: true,
    featured: false,
    specifications: {
      'Resistance': 'Air (Fan)',
      'Drive': 'Belt Drive',
      'Display': 'LCD Console',
      'Programs': 'Interval, Target, Custom',
      'Max User Weight': '158 kg',
      'Dimensions': '124 x 51 x 127 cm',
    },
    tags: ['air bike', 'HIIT', 'commercial grade'],
  },
  {
    id: 'fitness-4',
    name: 'Yoga Mat Premium TPE 6mm (Non-Slip)',
    description: 'Eco-friendly TPE yoga mat with superior grip and cushioning. Alignment markers for proper positioning.',
    price: 1200,
    category: 'Fitness & Gym',
    brand: 'FitLifestyle',
    image: '/images/products/yoga-mat-tpe-6mm.jpg',
    inStock: true,
    featured: false,
    specifications: {
      'Material': 'TPE (Thermoplastic Elastomer)',
      'Thickness': '6mm',
      'Dimensions': '183 x 61 cm',
      'Weight': '1.2 kg',
      'Features': 'Non-slip, Alignment markers, Eco-friendly',
    },
    tags: ['yoga', 'mat', 'eco-friendly'],
  },
  {
    id: 'fitness-5',
    name: 'Resistance Bands Set (5 Levels)',
    description: 'Complete set of 5 premium latex resistance bands with handles, door anchor, and carry bag. Full-body workout anywhere.',
    price: 1800,
    category: 'Fitness & Gym',
    brand: 'FitLifestyle',
    image: '/images/products/resistance-bands-set.jpg',
    inStock: true,
    featured: false,
    specifications: {
      'Levels': '5 (Extra Light to Extra Heavy)',
      'Material': 'Natural Latex',
      'Includes': '5 Bands, 2 Handles, Door Anchor, Ankle Straps, Carry Bag',
      'Max Resistance': '68 kg (150 lbs)',
    },
    tags: ['resistance bands', 'portable', 'full body'],
  },

  // Accessories
  {
    id: 'accessories-1',
    name: 'Nike Elite Pro Basketball Socks (Pack of 3)',
    description: 'Dri-FIT technology with targeted cushioning and arch support. Designed for high-performance basketball.',
    price: 1400,
    category: 'Accessories',
    brand: 'Nike',
    image: '/images/products/nike-elite-socks.jpg',
    inStock: true,
    featured: false,
    specifications: {
      'Material': 'Dri-FIT Polyester Blend',
      'Cushioning': 'Targeted Zones',
      'Support': 'Arch Compression',
      'Height': 'Crew',
      'Quantity': '3 pairs',
    },
    tags: ['socks', 'basketball', 'dri-fit'],
  },
  {
    id: 'accessories-2',
    name: 'Under Armour Hustle 5.0 Backpack',
    description: 'Water-resistant backpack with laptop sleeve, ventilated pockets, and ergonomic straps. 29L capacity for gear.',
    price: 3800,
    category: 'Accessories',
    brand: 'Under Armour',
    image: '/images/products/ua-hustle-backpack.jpg',
    inStock: true,
    featured: true,
    specifications: {
      'Capacity': '29L',
      'Material': 'Water-Resistant Polyester',
      'Laptop Sleeve': '15 inch',
      'Pockets': 'Multiple including ventilated',
      'Straps': 'HeatGear Shoulder Straps',
      'Dimensions': '48 x 33 x 18 cm',
    },
    tags: ['backpack', 'water-resistant', 'laptop'],
  },
  {
    id: 'accessories-3',
    name: 'Speedo Fastskin Pure Focus Swimming Goggles',
    description: 'Low-profile racing goggles with IQfit technology for custom fit. Anti-fog, UV protection, hydrodynamic design.',
    price: 4200,
    category: 'Accessories',
    brand: 'Speedo',
    image: '/images/products/speedo-fastskin-goggles.jpg',
    inStock: true,
    featured: false,
    specifications: {
      'Lens': 'Polycarbonate, Anti-Fog, UV Protection',
      'Frame': 'Low Profile Hydrodynamic',
      'Strap': 'Double Silicone Strap',
      'Fit': 'IQfit 3D Goggle Seal',
      'Nose Bridge': '3 Interchangeable Sizes',
    },
    tags: ['swimming', 'goggles', 'racing'],
  },
  {
    id: 'accessories-4',
    name: 'Garmin Forerunner 265 Running Watch',
    description: 'Advanced GPS running watch with AMOLED display, training metrics, music storage, and 15-day battery life.',
    price: 38900,
    category: 'Accessories',
    brand: 'Garmin',
    image: '/images/products/garmin-265.jpg',
    inStock: true,
    featured: true,
    specifications: {
      'Display': '1.3" AMOLED Touchscreen',
      'GPS': 'Multi-band GNSS',
      'Battery': 'Up to 15 days (Smartwatch), 24 hrs (GPS)',
      'Sensors': 'Heart Rate, Pulse Ox, Compass, Altimeter',
      'Features': 'Music, Garmin Pay, Training Plans',
      'Water Rating': '5 ATM',
    },
    tags: ['running', 'gps watch', 'training'],
  },
  {
    id: 'accessories-5',
    name: 'Theragun Mini 2.0 Massage Gun',
    description: 'Ultra-portable percussive therapy device with 3 speeds. Relieves muscle tension on the go. Bluetooth enabled.',
    price: 16900,
    category: 'Accessories',
    brand: 'Therabody',
    image: '/images/products/theragun-mini.jpg',
    inStock: true,
    featured: false,
    specifications: {
      'Speeds': '3 (1750, 2100, 2400 PPM)',
      'Amplitude': '12mm',
      'Stall Force': '9 kg (20 lbs)',
      'Battery': '120 minutes',
      'Weight': '0.65 kg',
      'Connectivity': 'Bluetooth (Therabody App)',
    },
    tags: ['recovery', 'massage gun', 'portable'],
  },
]

export function getDemoProducts(): DemoProduct[] {
  return DEMO_PRODUCTS
}

export function getFeaturedProducts(limit: number = 8): DemoProduct[] {
  return DEMO_PRODUCTS.filter(p => p.featured).slice(0, limit)
}

export function getProductById(id: string): DemoProduct | undefined {
  return DEMO_PRODUCTS.find(p => p.id === id)
}

export function getProductsByCategory(category: string): DemoProduct[] {
  if (category === 'All') return DEMO_PRODUCTS
  return DEMO_PRODUCTS.filter(p => p.category === category)
}

export function getProductsByBrand(brand: string): DemoProduct[] {
  return DEMO_PRODUCTS.filter(p => p.brand === brand)
}

export function getAllCategories(): string[] {
  return [...new Set(DEMO_PRODUCTS.map(p => p.category))].sort()
}

export function getAllBrands(): string[] {
  return [...new Set(DEMO_PRODUCTS.map(p => p.brand))].sort()
}

export function searchProducts(query: string): DemoProduct[] {
  const lowerQuery = query.toLowerCase()
  return DEMO_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.brand.toLowerCase().includes(lowerQuery) ||
    p.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}

export function sortProducts(products: DemoProduct[], sortBy: string): DemoProduct[] {
  const sorted = [...products]
  switch (sortBy) {
    case 'price_asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price_desc':
      return sorted.sort((a, b) => b.price - a.price)
    case 'name_asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'name_desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name))
    case 'featured':
    default:
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  }
}

export function filterProducts(
  products: DemoProduct[],
  filters: {
    category?: string
    brand?: string
    stock?: string
    search?: string
  }
): DemoProduct[] {
  let filtered = products

  if (filters.category && filters.category !== 'All') {
    filtered = filtered.filter(p => p.category === filters.category)
  }

  if (filters.brand) {
    filtered = filtered.filter(p => p.brand === filters.brand)
  }

  if (filters.stock === 'in') {
    filtered = filtered.filter(p => p.inStock)
  } else if (filters.stock === 'out') {
    filtered = filtered.filter(p => !p.inStock)
  }

  if (filters.search) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(filters.search!.toLowerCase()) ||
      p.description.toLowerCase().includes(filters.search!.toLowerCase()) ||
      p.category.toLowerCase().includes(filters.search!.toLowerCase()) ||
      p.brand.toLowerCase().includes(filters.search!.toLowerCase())
    )
  }

  return filtered
}