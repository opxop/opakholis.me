import hydrate from 'next-mdx-remote/hydrate';

import { getFileBySlug } from '@/lib/mdx';
import NowLayout from '@/layouts/now';
import MDXComponents from '@/components/MDXComponents';

export default function Now({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <NowLayout frontMatter={frontMatter}>{content}</NowLayout>;
}

export async function getStaticProps() {
  const now = await getFileBySlug('now');

  return { props: now };
}
