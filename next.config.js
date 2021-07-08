const withPWA = require('next-pwa');
const prod = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co']
  },
  pwa: {
    disable: !prod,
    dest: 'public'
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
      require('./scripts/generate-rss');
    }
    return config;
  }
});
