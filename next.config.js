/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
      domains: ['1.bp.blogspot.com', '308286-943399-raikfcquaxqncofqfm.stackpathdns.com', 'i.pinimg.com'],
  },
}

module.exports = nextConfig
