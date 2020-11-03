const readingTime = require('reading-time');
const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  extendFrontMatter: {
    process: (mdxContent) => ({
      readingTime: readingTime(mdxContent)
    })
  }
})();
