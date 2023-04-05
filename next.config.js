/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["image.tmdb.org"],
  },
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
