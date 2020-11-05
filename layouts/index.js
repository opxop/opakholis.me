import React from 'react';
import { parseISO, format } from 'date-fns';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Avatar,
  Icon
} from '@chakra-ui/core';

import BlogSeo from '../components/BlogSeo';
import Container from '../components/Container';

export default function BlogLayout({ children, frontMatter }) {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <BlogSeo url={`https://opakholis.me/blog/${slug}`} {...frontMatter} />
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
        w="100%"
      >
        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
          {frontMatter.title}
        </Heading>
        <Text fontSize="sm" color={secondaryTextColor[colorMode]}>
          <Icon name="date" mx={1} mb={1} />
          {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
          {` • `}
          <Icon name="coffe" mx={1} mb={1} />
          {frontMatter.readingTime.text}
        </Text>
      </Flex>
      {children}
    </Container>
  );
}
