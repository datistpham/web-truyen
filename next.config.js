/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['sstruyen.vn'],
    remotePatterns: [
      {
        hostname: 'upload.wikimedia.org'
      }
    ]
    
  },
}

module.exports = nextConfig
