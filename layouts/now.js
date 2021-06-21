import { NextSeo } from 'next-seo';
import { Box, Text, Heading, useColorModeValue } from '@chakra-ui/react';

import Container from '@/components/Container';
import { CustomLink } from '@/components/MDXComponents';

const url = 'https://opakholis.dev/now';
const title = 'Now - Opa Kholis Majid';
const description = 'What i am doing now.';

export default function UsesLayout({ children }) {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Container>
        <Box pb={5} pt={2}>
          <Heading
            as="h1"
            fontSize={['4xl', '5xl']}
            letterSpacing="tight"
            my={5}
          >
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
          "This page is inspired by&nbsp;
          <CustomLink href="https://sivers.org/">Derek Sivers</CustomLink>&nbsp;
          as&nbsp;
          <CustomLink href="https://nownownow.com/about">/now page </CustomLink>
          &nbsp;movement."
        </Text>
      </Container>
    </>
  );
}
