import { MDXRemote } from 'next-mdx-remote';

import { getFileBySlug } from '@/lib/mdx';
import NowLayout from '@/layouts/now';
import MDXComponents from '@/components/MDXComponents';

export default function Now({ mdxSource, frontMatter }) {
  return (
    <NowLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </NowLayout>
  );
}

export async function getStaticProps() {
  const now = await getFileBySlug('now');

  return { props: now };
}
