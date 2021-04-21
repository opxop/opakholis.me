module.exports = {
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
};
