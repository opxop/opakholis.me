import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: `https://opakholis.me${image}`,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={`${title} - Opa Kholis Majid`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: { publishedTime: date },
          url,
          title,
          description: summary,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName="Opa Kholis Majid"
        dateModified={date}
        datePublished={date}
        description={summary}
        image={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Opa Kholis Majid"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
