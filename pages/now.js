import hydrate from 'next-mdx-remote/hydrate';

import { getFileBySlug } from '@/lib/mdx';
import UsesLayout from '@/layouts/now';
import MDXComponents from '@/components/MDXComponents';

export default function Now({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <UsesLayout frontMatter={frontMatter}>{content}</UsesLayout>;
}

export async function getStaticProps() {
  const now = await getFileBySlug('now');

  return { props: now };
}
