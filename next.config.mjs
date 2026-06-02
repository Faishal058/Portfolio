/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Strips all console.log statements in production for raw execution speed
  },
  // Ensure heavy static bundles are compressed
  compress: true,
  // Optimize package bundling
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "gsap"],
  },
};

export default nextConfig;
