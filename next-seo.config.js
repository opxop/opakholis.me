const title = 'Opa Kholis Majid — Frontend developer.';
const description =
  'Seseorang yang menyebut dirinya sebagai Frontend developer—yang mana sekarang sedang senang ber-eksplorasi dengan Linux distribution dan Open-source Software.';

const SEO = {
  title,
  description,
  canonical: 'https://opakholis.dev/',
  noindex: false,
  openGraph: {
    type: 'website',
    locale: 'id',
    site_name: 'Opa Kholis Majid',
    url: 'https://opakholis.dev/',
    title,
    description,
    images: [
      {
        url: 'https://opakholis.dev/static/images/og.jpg',
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
