/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['sstruyen.vn', 'img.wattpad.com', 'i.pinimg.com'],
    remotePatterns: [
      {
        hostname: 'upload.wikimedia.org'
      }
    ]
    
  },
}

module.exports = nextConfig
