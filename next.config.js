/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "picsum.photos",
      "m.media-amazon.com",
      "www.amazon.es",
    ],
  },
};
