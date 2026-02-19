// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.leetcode.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'leetcode.com',
          pathname: '/**',
        },
      ],
    },
  };

  module.exports = nextConfig;
  