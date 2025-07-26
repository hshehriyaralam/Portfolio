import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    domains: ['res.cloudinary.com'],
  },
   server: {
    host: true,
    port: 3000,
   }
};

export default nextConfig;
