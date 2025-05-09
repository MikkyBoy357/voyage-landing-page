import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "s3-alpha-sig.figma.com",
      "firebasestorage.googleapis.com" // Add this line
    ],
  },
};

export default nextConfig;
