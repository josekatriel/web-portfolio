/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable TypeScript checking during production build
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors
    ignoreBuildErrors: true,
  },
  // Disable ESLint during production build
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Enable strict mode for React
  reactStrictMode: true,
};

module.exports = nextConfig;
