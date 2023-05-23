/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "api.dicebear.com",
      "images.pexels.com",
      ""
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
