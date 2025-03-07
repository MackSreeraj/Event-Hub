/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BACKEND_URI: process.env.NEXT_PUBLIC_BACKEND_URI,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: ['event-hub-n8zn.onrender.com', 'img.com', 'localhost', 'example.com']
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://event-hub-n8zn.onrender.com/api/:path*'
      }
    ]
  }
}

module.exports = nextConfig
