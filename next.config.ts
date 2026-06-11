import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
  },
  async redirects() {
    return [
      // Homepage legacy PHP URL → homepage (301 permanent)
      { source: '/index.php', destination: '/', permanent: true },

      // ============================================================
      // OLD TOOL URLS → NEW URLS (301 permanent)
      // ============================================================
      { source: '/tools/base64-encoder-decoder', destination: '/tools/base64',               permanent: true },
      { source: '/tools/url-encoder-decoder',    destination: '/tools/url-encoder',          permanent: true },
      { source: '/tools/json-validator',         destination: '/tools/json-formatter',       permanent: true },
      { source: '/tools/developer-tools',        destination: '/',                           permanent: true },
      { source: '/tools/image-tools',            destination: '/',                           permanent: true },
      { source: '/tools/text-tools',             destination: '/',                           permanent: true },
      { source: '/tools/pdf-tools',              destination: '/tools/pdf-merge-split',      permanent: true },

      // Old URLs with trailing slash or index.html
      { source: '/tools/:slug/',                 destination: '/tools/:slug',                permanent: true },
      { source: '/tools/:slug/index.html',       destination: '/tools/:slug',                permanent: true },
      { source: '/pk/:slug/',                    destination: '/pk/:slug',                   permanent: true },
      { source: '/pk/:slug/index.html',          destination: '/pk/:slug',                   permanent: true },

      // ============================================================
      // OLD PK URLS → NEW PK URLS (301 permanent)
      // ============================================================
      { source: '/pk/lesco-bill-check',                  destination: '/pk/check-lesco-bill',              permanent: true },
      { source: '/pk/k-electric-bill-check',             destination: '/pk/check-ke-electric-bill',        permanent: true },
      { source: '/pk/karachi-k-electric-bill-check',     destination: '/pk/check-ke-electric-bill',        permanent: true },
      { source: '/pk/mepco-bill-check',                  destination: '/pk/check-mepco-bill',              permanent: true },
      { source: '/pk/iesco-bill-check',                  destination: '/pk/check-iesco-bill',              permanent: true },
      { source: '/pk/fesco-bill-check',                  destination: '/pk/check-fesco-bill',              permanent: true },
      { source: '/pk/gepco-bill-check',                  destination: '/pk/check-gepco-bill',              permanent: true },
      { source: '/pk/hesco-bill-check',                  destination: '/pk/check-hesco-bill',              permanent: true },
      { source: '/pk/pesco-bill-check',                  destination: '/pk/check-pesco-bill',              permanent: true },
      { source: '/pk/ptcl-bill-check',                   destination: '/pk/ptcl-bill-checker',             permanent: true },
      { source: '/pk/sngpl-gas-bill-check',              destination: '/pk/sngpl-gas-bill-checker',        permanent: true },
      { source: '/pk/bisp-8171-check',                   destination: '/pk/bisp-payment-verification',     permanent: true },
      { source: '/pk/electricity-bill-check',            destination: '/pk/check-lesco-bill',              permanent: true },
      { source: '/pk/electricity-unit-calculator',       destination: '/pk/electricity-unit-subsidy-calculator', permanent: true },

      // City-specific electricity pages → relevant DISCO pages
      { source: '/pk/lahore-electricity-bill-check',     destination: '/pk/check-lesco-bill',              permanent: true },
      { source: '/pk/karachi-electricity-bill-check',    destination: '/pk/check-ke-electric-bill',        permanent: true },
      { source: '/pk/faisalabad-electricity-bill-check', destination: '/pk/check-fesco-bill',              permanent: true },
      { source: '/pk/islamabad-electricity-bill-check',  destination: '/pk/check-iesco-bill',              permanent: true },
      { source: '/pk/rawalpindi-electricity-bill-check', destination: '/pk/check-iesco-bill',              permanent: true },
      { source: '/pk/peshawar-electricity-bill-check',   destination: '/pk/check-pesco-bill',              permanent: true },
      { source: '/pk/gujranwala-electricity-bill-check', destination: '/pk/check-gepco-bill',              permanent: true },
      { source: '/pk/hyderabad-electricity-bill-check',  destination: '/pk/check-hesco-bill',              permanent: true },
      { source: '/pk/abbottabad-electricity-bill-check', destination: '/pk/check-pesco-bill',              permanent: true },
      { source: '/pk/quetta-electricity-bill-check',     destination: '/pk/check-qesco-bill',              permanent: true },
      { source: '/pk/compress-image-for-online-form',    destination: '/tools/image-compressor',           permanent: true },
      { source: '/pk/qesco-bill-check',                  destination: '/pk/check-qesco-bill',              permanent: true },
      { source: '/pk/sepco-bill-check',                  destination: '/pk/check-sepco-bill',              permanent: true },
      { source: '/pk/tesco-bill-check',                  destination: '/pk/check-tesco-bill',              permanent: true },
      { source: '/pk/ssgc-gas-bill-check',               destination: '/pk/ssgc-gas-bill-checker',         permanent: true },
      { source: '/pk/income-tax-calculator',             destination: '/pk',                               permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/workers/:path*',
        headers: [
          { key: 'Content-Type',                 value: 'application/javascript' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp'           },
          { key: 'Cross-Origin-Opener-Policy',   value: 'same-origin'            },
        ],
      },
    ];
  },
};

export default nextConfig;
