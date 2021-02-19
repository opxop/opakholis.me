import { NextSeo } from 'next-seo';
import {
  Box,
  Text,
  Divider,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

import Container from '@/components/Container';
import { CustomLink } from '@/components/MDXComponents';

export default function UsesLayout({ children }) {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');

  return (
    <Container>
      <NextSeo
        title="Now - Opa Kholis Majid"
        description="What i am doing now."
        canonical="https://opakholis.me/now"
        openGraph={{
          url: 'https://opakholis.me/now',
          title: 'Now - Opa Kholis Majid',
          description: 'What i am doing now.'
        }}
      />

      <Box mb={5}>
        <Heading as="h1" fontSize="5xl" letterSpacing="tight" my={5}>
          Now.
        </Heading>
        <Text color={secondaryText}>
          Here are some of the things I am spending my time on right now
        </Text>
      </Box>
      {children}
      <Text
        color={secondaryText}
        mt={4}
        textAlign="right"
        fontSize="sm"
        fontStyle="italic"
      >
        This page is inspired by&nbsp;
        <CustomLink href="https://sivers.org/">Derek Sivers</CustomLink>&nbsp;
        as&nbsp;
        <CustomLink href="https://nownownow.com/about">/now page </CustomLink>
        &nbsp;movement.
      </Text>
      <Divider orientation="horizontal" my={6} />
    </Container>
  );
}
