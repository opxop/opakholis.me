import { parseISO, format } from 'date-fns';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Box,
  Badge
} from '@chakra-ui/react';

import BlogSeo from '@/components/BlogSeo';
import Container from '@/components/Container';
import { DateIcon, TimeIcon } from '@/styles/icons';

export default function BlogLayout({ children, frontMatter }) {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <BlogSeo url={frontMatter.slug} {...frontMatter} />
      <Flex
        as="article"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
        w="100%"
      >
        <Heading letterSpacing="tight" mb={1} as="h1" size="2xl">
          {frontMatter.title}
        </Heading>
        <Text fontSize="sm" color={secondaryTextColor[colorMode]}>
          <DateIcon mx={1} mb={1} />
          {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
          {` • `}
          <TimeIcon mx={1} mb={1} />
          {frontMatter.readingTime.text}
        </Text>
      </Flex>
      {frontMatter.tags && (
        <Box mt={-4}>
          {frontMatter.tags.map((topic, i) => {
            return (
              <Badge
                key={i}
                rounded="md"
                px={2}
                py={1}
                mr={2}
                fontWeight="normal"
                textTransform="none"
                colorScheme="gray"
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
