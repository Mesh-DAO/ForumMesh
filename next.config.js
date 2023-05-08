/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    unoptimized: true,
    domains: [
      "api.dicebear.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
