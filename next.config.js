/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Performance optimizations for reducing unused JavaScript
  experimental: {
    optimizePackageImports: ['@vercel/analytics'],
  },
  
  // Bundle optimization
  webpack: (config, { isServer }) => {
    // Optimize bundle splitting
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        analytics: {
          name: 'analytics',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@vercel\/analytics|gtag)[\\/]/,
          priority: 30,
          reuseExistingChunk: true,
        },
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          priority: 20,
          reuseExistingChunk: true,
        },
      };
    }
    return config;
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
          // Performance headers
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Static assets caching
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/vote',
        destination: '/#vote-section',
        permanent: true,
      },
      // Season 9 contestant profile URLs — the cast changed for Season 10,
      // so these no longer map to a specific person. Redirect to the
      // current contestants listing instead of leaving them as 404s, to
      // preserve whatever SEO equity/backlinks they've picked up.
      {
        source: '/contestants/demon-pawan',
        destination: '/contestants',
        permanent: true,
      },
      {
        source: '/contestants/flora-saini-asha-saini',
        destination: '/contestants',
        permanent: true,
      },
      {
        source: '/contestants/harita-harish',
        destination: '/contestants',
        permanent: true,
      },
      {
        source: '/contestants/manish-maryada',
        destination: '/contestants',
        permanent: true,
      },
      {
        source: '/contestants/priya-shetty',
        destination: '/contestants',
        permanent: true,
      },
      {
        source: '/contestants/ramu-rathod',
        destination: '/contestants',
        permanent: true,
      },
      // Season 9-era news article slugs that were briefly listed in the
      // sitemap by mistake (see sitemap.js fix) and got crawled/discovered.
      // Redirect to the news listing rather than 404.
      {
        source: '/news/bigg-boss-telugu-9-grand-launch',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news/week-1-nominations-revealed',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news/luxury-budget-task-highlights',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news/elimination-predictions-week-3',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news/contestants-latest-updates',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news/nagarjuna-host-special-moments',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news/secret-room-twist-unveiled',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news/voting-trends-analysis',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news/contestant-profiles-complete-guide',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news/eviction-results-live-updates',
        destination: '/news',
        permanent: true,
      },
      // Old page removed during the Season 10 rebuild.
      {
        source: '/contestant-videos',
        destination: '/contestant-photos',
        permanent: true,
      },
      // Leftover from removed hreflang tags, never a real page.
      {
        source: '/te',
        destination: '/',
        permanent: true,
      },
    ];
  },
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  swcMinify: true, // Use SWC for faster minification
};

module.exports = nextConfig;
