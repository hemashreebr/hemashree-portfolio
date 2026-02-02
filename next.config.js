/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/hemashree-portfolio',
  assetPrefix: '/hemashree-portfolio/',
}

module.exports = nextConfig