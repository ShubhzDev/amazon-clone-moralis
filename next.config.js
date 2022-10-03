/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.dicebear.com", "i.ytimg.com", "m.media-amazon.com"],
  },
};

module.exports = nextConfig;
