import { parseISO, format } from 'date-fns';
import { Box, Text, Badge, Heading, useColorModeValue } from '@chakra-ui/react';

import BlogSeo from '@/components/BlogSeo';
import Container from '@/components/Container';
import { DateIcon, TimeIcon } from '@/styles/icons';

export default function BlogLayout({ children, frontMatter }) {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  const bg = useColorModeValue('gray.300', 'gray.600');

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
        <Box mb={6}>
          {frontMatter.tags.map((topic, i) => {
            return (
              <Badge
                key={i}
                p={(3, 2)}
                mr={3}
                variant="subtle"
                textTransform="lowercase"
                transition=".5s ease-in-out"
                _hover={{ bg: `${bg}`, cursor: 'pointer' }}
              >
                {topic}
              </Badge>
            );
          })}
        </Box>
      )}
      {children}
    </Container>
  );
}
