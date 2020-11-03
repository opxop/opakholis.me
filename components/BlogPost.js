import React from 'react';
import NextLink from 'next/link';
import { Box, Text, Heading, Link, useColorMode } from '@chakra-ui/core';

const BlogPost = (frontMatter) => {
  const { title, summary } = frontMatter;

  const { colorMode } = useColorMode();

  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box mb={8} display="block" w="100%">
          <Heading size="md" as="h3" mb={2} fontWeight="medium">
            {title}
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
