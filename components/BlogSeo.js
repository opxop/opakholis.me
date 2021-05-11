import { NextSeo, ArticleJsonLd } from 'next-seo';

export default function BlogSeo({ title, summary, publishedAt, url, image }) {
  const link = `https://opakholis.me/${url}`;
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: `https://opakholis.me${image}`,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={`${title} — Opa Kholis Majid`}
        description={summary}
        canonical={link}
        openGraph={{
          type: 'article',
          article: { publishedTime: date },
          url: link,
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
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Opa Kholis Majid"
        title={title}
        url={link}
      />
    </>
  );
}
