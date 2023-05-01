/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    unoptimized: true,
    domains: [
      "api.dicebear.com",
      "via.placeholder.com",
      "pbs.twimg.com",
      "i.seadn.io",
      "smolverse.lol",
      "d3k81ch9hvuctc.cloudfront.net",
      "assets-global.website-files.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
