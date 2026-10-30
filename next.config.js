/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/major-sports',
  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig