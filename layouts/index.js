import React from 'react';
import { parseISO, format } from 'date-fns';
import { useColorMode, Heading, Text, Flex, Avatar } from '@chakra-ui/core';

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
        <Flex
          justify="space-between"
          align={['initial', 'center']}
          direction={['column', 'row']}
          my={2}
          w="100%"
        >
          <Flex align="center">
            <Avatar
              size="xs"
              name="Opa Kholis Majid"
              src="https://bit.ly/3oU1igz"
              mr={2}
            />
            <Text fontSize="sm" color={secondaryTextColor[colorMode]}>
              {frontMatter.by}
              {'Opa Kholis Majid / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </Text>
          </Flex>
          <Text fontSize="sm" color="gray.500" mt={[2, 0]}>
            {frontMatter.readingTime.text}
          </Text>
        </Flex>
      </Flex>
      {children}
    </Container>
  );
}
