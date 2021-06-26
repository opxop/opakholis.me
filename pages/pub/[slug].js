import { useRouter } from 'next/router';
import slugify from 'slugify';
import { NextSeo } from 'next-seo';
import { NotionRenderer } from 'react-notion';

import Container from '@/components/Container';

import styles from './pub.module.scss';
import 'react-notion/src/styles.css';

export default function Pub({ table, page }) {
  const router = useRouter();
  const { slug } = router.query;

  const url = `https://opakholis.dev/pub/${slug}`;
  const title = `Publikasi - ${table?.title}`;
  const description = `${table?.genre}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Container>
        <div className={styles.post}>
          {page && <NotionRenderer blockMap={page} />}
        </div>
      </Container>
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_DATABASE}`
  );
  const data = await res.json();

  const paths = data
    .filter((table) => table.status === 'Published')
    .map((b) => `/pub/${slugify(b.title, { lower: true })}`);

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_DATABASE}`
  );
  const data = await res.json();

  if (!data) return { notFound: true };

  const { slug } = context.params;
  const table = data.find((b) => slugify(b.title, { lower: true }) === slug);

  const pageRes = await fetch(
    `https://notion-api.splitbee.io/v1/page/${table.id}`
  );
  const pageData = await pageRes.json();

  return {
    props: { table, page: pageData },
    revalidate: 1
  };
};
