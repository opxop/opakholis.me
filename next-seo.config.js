const title = 'Opa Kholis Majid – Frontend Developer';
const description = 'Front-end developer, Flutter enthusiast';

const SEO = {
  title,
  description,
  canonical: 'https://opakholis.me',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://opakholis.me',
    title,
    description,
    images: [
      {
        url: 'https://opakholis.me/static/images/og.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@opakholis',
    site: '@opakholis',
    cardType: 'summary_large_image'
  }
};

export default SEO;
