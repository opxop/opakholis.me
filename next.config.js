const withPWA = require('next-pwa');
const prod = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    disable: !prod,
    dest: 'public'
  },
  future: {
    webpack5: true
  },
  reactStrictMode: true,
  experimental: {
    turboMode: true
  },
  images: {
    domains: ['i.scdn.co']
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
      require('./scripts/generate-rss');
    }
    return config;
  }
});
