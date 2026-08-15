import type { NextConfig } from "next";

// All imagery is self-hosted under /public/images, so no remote image hosts are
// allowed. Previously this listed Figma and Firebase Storage; the Firebase
// bucket started returning 402 and took every image on the site down with it.
const nextConfig: NextConfig = {};

export default nextConfig;
