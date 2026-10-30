#!/bin/bash
# Download product images for MAJOR SPORTS

cd C:/Users/USER/major-sports/public/images/products

echo "Downloading product images..."

# Badminton - Rackets
curl -L -o yonex-astrox-77-pro.jpg "https://images.unsplash.com/photo-1626231951921-5a2e8b1c4b3c?w=600&q=80" 2>/dev/null || echo "Failed: yonex-astrox-77-pro"
curl -L -o linning-aeronaut-9000c.jpg "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80" 2>/dev/null || echo "Failed: linning-aeronaut-9000c"
curl -L -o victor-thruster-k9900.jpg "https://images.unsplash.com/photo-1626231951921-5a2e8b1c4b3c?w=600&q=80" 2>/dev/null || echo "Failed: victor-thruster-k9900"

# Badminton - Shuttlecocks
curl -L -o yonex-mavis-350.jpg "https://images.unsplash.com/photo-1626231951921-5a2e8b1c4b3c?w=600&q=80" 2>/dev/null || echo "Failed: yonex-mavis-350"
curl -L -o linning-a800-feather.jpg "https://images.unsplash.com/photo-1626231951921-5a2e8b1c4b3c?w=600&q=80" 2>/dev/null || echo "Failed: linning-a800-feather"

# Cricket - Bats
curl -L -o sg-players-edition.jpg "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80" 2>/dev/null || echo "Failed: sg-players-edition"
curl -L -o kookaburra-kahuna-pro.jpg "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80" 2>/dev/null || echo "Failed: kookaburra-kahuna-pro"
curl -L -o graynicolls-legend.jpg "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80" 2>/dev/null || echo "Failed: graynicolls-legend"
curl -L -o dsc-krunch-kashmir.jpg "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80" 2>/dev/null || echo "Failed: dsc-krunch-kashmir"

# Cricket - Ball
curl -L -o sg-tournament-ball.jpg "https://images.unsplash.com/photo-1606755962717-8e4d8b23e8e3?w=600&q=80" 2>/dev/null || echo "Failed: sg-tournament-ball"

# Football - Balls
curl -L -o nike-flight-ball.jpg "https://images.unsplash.com/photo-1614632527830-5f3f8d5b3b3c?w=600&q=80" 2>/dev/null || echo "Failed: nike-flight-ball"
curl -L -o adidas-al-rihla-pro.jpg "https://images.unsplash.com/photo-1614632527830-5f3f8d5b3b3c?w=600&q=80" 2>/dev/null || echo "Failed: adidas-al-rihla-pro"
curl -L -o puma-future-7.jpg "https://images.unsplash.com/photo-1614632527830-5f3f8d5b3b3c?w=600&q=80" 2>/dev/null || echo "Failed: puma-future-7"

# Football - Boots
curl -L -o tiempo-legend-10.jpg "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" 2>/dev/null || echo "Failed: tiempo-legend-10"
curl -L -o predator-accuracy.jpg "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" 2>/dev/null || echo "Failed: predator-accuracy"

# Fitness & Gym
curl -L -o bowflex-selecttech-552.jpg "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" 2>/dev/null || echo "Failed: bowflex-selecttech-552"
curl -L -o domyos-500-treadmill.jpg "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" 2>/dev/null || echo "Failed: domyos-500-treadmill"
curl -L -o rogue-echo-bike.jpg "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" 2>/dev/null || echo "Failed: rogue-echo-bike"
curl -L -o yoga-mat-tpe-6mm.jpg "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&q=80" 2>/dev/null || echo "Failed: yoga-mat-tpe-6mm"
curl -L -o resistance-bands-set.jpg "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" 2>/dev/null || echo "Failed: resistance-bands-set"

# Accessories
curl -L -o nike-elite-socks.jpg "https://images.unsplash.com/photo-1556906781-9a4129eb1658?w=600&q=80" 2>/dev/null || echo "Failed: nike-elite-socks"
curl -L -o ua-hustle-backpack.jpg "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80" 2>/dev/null || echo "Failed: ua-hustle-backpack"
curl -L -o speedo-fastskin-goggles.jpg "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" 2>/dev/null || echo "Failed: speedo-fastskin-goggles"
curl -L -o garmin-265.jpg "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80" 2>/dev/null || echo "Failed: garmin-265"
curl -L -o theragun-mini.jpg "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" 2>/dev/null || echo "Failed: theragun-mini"

echo "Done downloading product images"
ls -la *.jpg
