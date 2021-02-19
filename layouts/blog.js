import { parseISO, format } from 'date-fns';
import {
  Box,
  Text,
  Badge,
  Divider,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

import BlogSeo from '@/components/BlogSeo';
import Container from '@/components/Container';
import { DateIcon, TimeIcon } from '@/styles/icons';

export default function BlogLayout({ children, frontMatter }) {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  const bg = useColorModeValue('gray.200', 'gray.700');

  return (
    <Container>
      <BlogSeo url={frontMatter.slug} {...frontMatter} />
      <Box pb={5}>
        <Heading as="h1" fontSize="5xl" letterSpacing="tight" mb={4}>
          {frontMatter.title}
        </Heading>
        <Text color={secondaryText}>
          <DateIcon mx={1} mb={1} />
          {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
          {` • `}
          <TimeIcon mx={1} mb={1} />
          {frontMatter.readingTime.text}
        </Text>
      </Box>
      {frontMatter.tags && (
        <Box>
          {frontMatter.tags.map((topic, i) => {
            return (
              <Badge
                key={i}
                rounded="sm"
                p={(2, '5px')}
                mr={3}
                mb={3}
                fontWeight="normal"
                textTransform="lowercase"
                variant="outline"
                transition=".5s ease-in-out"
                _hover={{ bg: `${bg}`, cursor: 'pointer' }}
              >
                #{topic}
              </Badge>
            );
          })}
        </Box>
      )}
      {children}
      <Divider orientation="horizontal" mt={12} mb={6} />
    </Container>
  );
}
