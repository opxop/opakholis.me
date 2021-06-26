import slugify from 'slugify';
import { NotionRenderer } from 'react-notion';
import Container from '@/components/Container';

import styles from './pub.module.scss';
import 'react-notion/src/styles.css';

export default function Pub({ page }) {
  return (
    <Container>
      <div className={styles.post}>
        {page && <NotionRenderer blockMap={page} />}
      </div>
    </Container>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_DATABASE}`
  );
  const data = await res.json();

  const paths = data
    .filter((table) => table.Status === 'Published')
    .map((b) => `/pub/${slugify(b.Title, { lower: true })}`);

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_DATABASE}`
  );
  const data = await res.json();

  if (!data) return { notFound: true };

  const { slug } = context.params;
  const table = data.find((b) => slugify(b.Title, { lower: true }) === slug);

  const pageRes = await fetch(
    `https://notion-api.splitbee.io/v1/page/${table.id}`
  );
  const pageData = await pageRes.json();

  return {
    props: { table, page: pageData },
    revalidate: 1
  };
};
