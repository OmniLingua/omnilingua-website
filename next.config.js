/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["raw.githubusercontent.com"], // ✅ Allow external image domain
    unoptimized: true,
  },
  experimental: {
    esmExternals: "loose",
  },
}

module.exports = nextConfig
