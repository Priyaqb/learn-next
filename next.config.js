/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
      domains: ['images.unsplash.com', 'www.goodmorningimagesdownload.com', 'i.pinimg.com'],
  },
}

module.exports = nextConfig
