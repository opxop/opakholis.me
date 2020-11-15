import React from 'react';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import { Box, Text, Heading, Link, useColorMode, Flex } from '@chakra-ui/react';

const BlogPost = (frontMatter) => {
  const { title, summary } = frontMatter;

  const { colorMode } = useColorMode();

  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const bgHover = {
    light: 'gray.100',
    dark: 'gray.800'
  };

  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link
        p="14px"
        border="2px solid transparent"
        _hover={{
          textDecoration: 'none',
          backgroundColor: bgHover[colorMode],
          borderRadius: 'sm'
        }}
        _focus={{
          border: '2px dashed',
          borderColor: 'gray.600'
        }}
      >
        <Box display="block" width="100%">
          <Flex
            width={['100%', '100%', '668px']}
            align="flex-start"
            justifyContent="space-between"
            flexDirection={['column', 'column', 'row']}
          >
            <Heading size="md" as="h3" mb={1} fontWeight="medium">
              {title}
            </Heading>
            <Text
              fontSize={['14px', 'normal']}
              color="gray.500"
              minWidth="105px"
              textAlign={['left', 'left', 'right']}
              mb={[4, 2, 0]}
            >
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
