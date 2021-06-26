import { NotionRenderer } from 'react-notion';
import slugify from 'slugify';

import 'react-notion/src/styles.css';

import Container from '@/components/Container';

export default function Pub({ page }) {
  return <Container>{page && <NotionRenderer blockMap={page} />}</Container>;
}

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/257ab1e2ab9b4430b9f030882b89e475`
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
    `https://notion-api.splitbee.io/v1/table/257ab1e2ab9b4430b9f030882b89e475`
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
