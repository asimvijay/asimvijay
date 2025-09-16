import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com'], // ✅ Allow external image domain
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevent build from failing on ESLint errors
  },
};

export default nextConfig;
