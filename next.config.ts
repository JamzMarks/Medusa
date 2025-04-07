import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', "fastly.picsum.photos"],
  },
  reactStrictMode: true,
};

export default nextConfig;
