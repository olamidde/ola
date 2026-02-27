import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',        // Spotify album / track art
      },
      {
        protocol: 'https',
        hostname: '**.spotifycdn.com', // Spotify CDN (profile images, etc.)
      },
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com', // Facebook-linked profile pics
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',      // Facebook CDN variants
      },
      {
        protocol: 'https',
        hostname: 'image-cdn-*.spotifycdn.com',
      },
    ],
  },
};

export default nextConfig;
