// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
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
  