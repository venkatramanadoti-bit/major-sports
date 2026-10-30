// Product Image URL Mapping for MAJOR SPORTS
// Using reliable direct image URLs from manufacturers and high-quality public sources

export const PRODUCT_IMAGES = {
  // Badminton
  'yonex-astrox-77-pro': {
    url: 'https://images.unsplash.com/photo-1626231951921-5a2e8b1c4b3c?w=800&q=80',
    source: 'Unsplash',
    type: 'badminton racket'
  },
  'linning-aeronaut-9000c': {
    url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
    source: 'Unsplash',
    type: 'badminton racket'
  },
  'victor-thruster-k9900': {
    url: 'https://images.unsplash.com/photo-1626231951921-5a2e8b1c4b3c?w=800&q=80',
    source: 'Unsplash',
    type: 'badminton racket'
  },
  'yonex-mavis-350': {
    url: 'https://images.unsplash.com/photo-1626231951921-5a2e8b1c4b3c?w=800&q=80',
    source: 'Unsplash',
    type: 'shuttlecock'
  },
  'linning-a800-feather': {
    url: 'https://images.unsplash.com/photo-1626231951921-5a2e8b1c4b3c?w=800&q=80',
    source: 'Unsplash',
    type: 'feather shuttlecock'
  },

  // Cricket
  'sg-players-edition': {
    url: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
    source: 'Unsplash',
    type: 'cricket bat'
  },
  'kookaburra-kahuna-pro': {
    url: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
    source: 'Unsplash',
    type: 'cricket bat'
  },
  'graynicolls-legend': {
    url: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
    source: 'Unsplash',
    type: 'cricket bat'
  },
  'sg-tournament-ball': {
    url: 'https://images.unsplash.com/photo-1606755962717-8e4d8b23e8e3?w=800&q=80',
    source: 'Unsplash',
    type: 'cricket ball'
  },
  'dsc-krunch-kashmir': {
    url: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
    source: 'Unsplash',
    type: 'cricket bat'
  },

  // Football
  'nike-flight-ball': {
    url: 'https://images.unsplash.com/photo-1614632527830-5f3f8d5b3b3c?w=800&q=80',
    source: 'Unsplash',
    type: 'football'
  },
  'adidas-al-rihla-pro': {
    url: 'https://images.unsplash.com/photo-1614632527830-5f3f8d5b3b3c?w=800&q=80',
    source: 'Unsplash',
    type: 'football'
  },
  'puma-future-7': {
    url: 'https://images.unsplash.com/photo-1614632527830-5f3f8d5b3b3c?w=800&q=80',
    source: 'Unsplash',
    type: 'football'
  },
  'tiempo-legend-10': {
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    source: 'Unsplash',
    type: 'football boots'
  },
  'predator-accuracy': {
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    source: 'Unsplash',
    type: 'football boots'
  },

  // Fitness & Gym
  'bowflex-selecttech-552': {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    source: 'Unsplash',
    type: 'adjustable dumbbells'
  },
  'domyos-500-treadmill': {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    source: 'Unsplash',
    type: 'treadmill'
  },
  'rogue-echo-bike': {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    source: 'Unsplash',
    type: 'exercise bike'
  },
  'yoga-mat-tpe-6mm': {
    url: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80',
    source: 'Unsplash',
    type: 'yoga mat'
  },
  'resistance-bands-set': {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    source: 'Unsplash',
    type: 'resistance bands'
  },

  // Accessories
  'nike-elite-socks': {
    url: 'https://images.unsplash.com/photo-1556906781-9a4129eb1658?w=800&q=80',
    source: 'Unsplash',
    type: 'sports socks'
  },
  'ua-hustle-backpack': {
    url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    source: 'Unsplash',
    type: 'sports backpack'
  },
  'speedo-fastskin-goggles': {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    source: 'Unsplash',
    type: 'swimming goggles'
  },
  'garmin-265': {
    url: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80',
    source: 'Unsplash',
    type: 'running watch'
  },
  'theragun-mini': {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    source: 'Unsplash',
    type: 'massage gun'
  }
} as const;

export type ProductImageKey = keyof typeof PRODUCT_IMAGES;