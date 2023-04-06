/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["image.tmdb.org"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
