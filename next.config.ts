import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
  },
  // Ensure Worker files in /public are served with correct headers
  async headers() {
    return [
      {
        source: '/workers/:path*',
        headers: [
          { key: 'Content-Type',                   value: 'application/javascript' },
          { key: 'Cross-Origin-Embedder-Policy',   value: 'require-corp'           },
          { key: 'Cross-Origin-Opener-Policy',     value: 'same-origin'            },
        ],
      },
    ];
  },
};

export default nextConfig;
