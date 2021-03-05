import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import {
  Box,
  Text,
  Link,
  Flex,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

const BlogPost = ({ title, summary, slug, publishedAt }) => {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  const bgHover = useColorModeValue('gray.100', 'gray.800');

  return (
    <NextLink href={`/blog/${slug}`}>
      <Link
        p="14px"
        border="2px solid transparent"
        _hover={{
          textDecoration: 'none',
          backgroundColor: bgHover,
          borderRadius: 'sm'
        }}
        _active={{
          border: '2px dashed',
          borderColor: 'gray.600'
        }}
      >
        <Box display="block" width="100%">
          <Flex
            justifyContent="space-between"
            flexDirection={['column', 'column', 'row']}
          >
            <Heading size="md" as="h3" mb={[0, 1]} fontWeight="medium">
              {title}
            </Heading>
            <Text
              fontSize={['14px', 'normal']}
              color="gray.500"
              textAlign={['left', 'left', 'right']}
              mb={[2, 2, 0]}
            >
              {format(parseISO(publishedAt), 'MMM dd, yyyy')}
            </Text>
          </Flex>
          <Text color={secondaryText}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
