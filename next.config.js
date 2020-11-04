const readingTime = require('reading-time');
const withMdxEnhanced = require('next-mdx-enhanced');
const mdxPrism = require('mdx-prism');

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  remarkPlugins: [
    require('remark-code-titles'),
    require('remark-autolink-headings'),
    require('remark-slug')
  ],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: (mdxContent) => ({
      wordCount: mdxContent.split(/\s+/gu).length,
      readingTime: readingTime(mdxContent)
    })
  }
})();
