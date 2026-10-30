#!/bin/bash
# Generate placeholder SVG images for all products

DIR="C:/Users/USER/major-sports/public/images/products"

# Function to create SVG
create_svg() {
    local filename="$1"
    local emoji="$2"
    local brand="$3"
    local name="$4"
    local category="$5"
    local color="$6"
    
    cat > "$DIR/$filename" << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <rect width="800" height="800" fill="#1e3a5f"/>
  <text x="400" y="350" font-family="system-ui, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">$emoji</text>
  <text x="400" y="420" font-family="system-ui, sans-serif" font-size="24" fill="$color" text-anchor="middle">$brand</text>
  <text x="400" y="460" font-family="system-ui, sans-serif" font-size="20" fill="#94a3b8" text-anchor="middle">$name</text>
  <text x="400" y="520" font-family="system-ui, sans-serif" font-size="16" fill="#64748b" text-anchor="middle">$category</text>
  <rect x="300" y="560" width="200" height="3" fill="$color" opacity="0.3"/>
  <text x="400" y="600" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">MAJOR SPORTS • Demo Image</text>
</svg>
EOF
}

# Badminton - Emerald color
create_svg "yonex-astrox-77-pro.svg" "🏸" "YONEX" "Astrox 77 Pro" "Badminton" "#10b981"
create_svg "linning-aeronaut-9000c.svg" "🏸" "LI-NING" "Aeronaut 9000C" "Badminton" "#10b981"
create_svg "victor-thruster-k9900.svg" "🏸" "VICTOR" "Thruster K 9900" "Badminton" "#10b981"
create_svg "yonex-mavis-350.svg" "🏸" "YONEX" "Mavis 350" "Badminton" "#10b981"
create_svg "linning-a800-feather.svg" "🏸" "LI-NING" "A+800 Feather" "Badminton" "#10b981"

# Cricket - Amber color
create_svg "sg-players-edition.svg" "🏏" "SG" "Players Edition" "Cricket" "#f59e0b"
create_svg "kookaburra-kahuna-pro.svg" "🏏" "KOOKABURRA" "Kahuna Pro" "Cricket" "#f59e0b"
create_svg "graynicolls-legend.svg" "🏏" "GRAY-NICOLLS" "Legend" "Cricket" "#f59e0b"
create_svg "sg-tournament-ball.svg" "🏏" "SG" "Tournament Ball" "Cricket" "#f59e0b"
create_svg "dsc-krunch-kashmir.svg" "🏏" "DSC" "Krunch Kashmir" "Cricket" "#f59e0b"

# Football - Blue color
create_svg "nike-flight-ball.svg" "⚽" "NIKE" "Flight Ball" "Football" "#3b82f6"
create_svg "adidas-al-rihla-pro.svg" "⚽" "ADIDAS" "Al Rihla Pro" "Football" "#3b82f6"
create_svg "puma-future-7.svg" "⚽" "PUMA" "Future 7" "Football" "#3b82f6"
create_svg "tiempo-legend-10.svg" "⚽" "NIKE" "Tiempo Legend 10" "Football" "#3b82f6"
create_svg "predator-accuracy.svg" "⚽" "ADIDAS" "Predator Accuracy" "Football" "#3b82f6"

# Fitness & Gym - Purple color
create_svg "bowflex-selecttech-552.svg" "💪" "BOWFLEX" "SelectTech 552" "Fitness & Gym" "#8b5cf6"
create_svg "domyos-500-treadmill.svg" "💪" "DOMYOS" "500 Treadmill" "Fitness & Gym" "#8b5cf6"
create_svg "rogue-echo-bike.svg" "💪" "ROGUE" "Echo Bike V3" "Fitness & Gym" "#8b5cf6"
create_svg "yoga-mat-tpe-6mm.svg" "💪" "FITLIFESTYLE" "Yoga Mat 6mm" "Fitness & Gym" "#8b5cf6"
create_svg "resistance-bands-set.svg" "💪" "FITLIFESTYLE" "Resistance Bands" "Fitness & Gym" "#8b5cf6"

# Accessories - Rose color
create_svg "nike-elite-socks.svg" "🎒" "NIKE" "Elite Pro Socks" "Accessories" "#ec4899"
create_svg "ua-hustle-backpack.svg" "🎒" "UNDER ARMOUR" "Hustle 5.0" "Accessories" "#ec4899"
create_svg "speedo-fastskin-goggles.svg" "🎒" "SPEEDO" "Fastskin Goggles" "Accessories" "#ec4899"
create_svg "garmin-265.svg" "🎒" "GARMIN" "Forerunner 265" "Accessories" "#ec4899"
create_svg "theragun-mini.svg" "🎒" "THERABODY" "Theragun Mini" "Accessories" "#ec4899"

echo "All product images created!"
