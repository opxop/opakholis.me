const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  future: {
    webpack5: true
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
