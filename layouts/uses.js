import { NextSeo } from 'next-seo';
import { Box, Text, Heading, useColorModeValue } from '@chakra-ui/react';

import Container from '@/components/Container';
import { CustomLink } from '@/components/MDXComponents';

const url = 'https://opakholis.dev/uses';
const title = 'Uses - Opa Kholis Majid';
const description = 'What i use… and why?';

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
            What I Use.
          </Heading>
          <Text color={secondaryText}>
            Although no one cares to ask me what I use. but, here is a list of
            stuff that fits my daily routine and requirement.
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
          <CustomLink href="https://wesbos.com/">Wes Bos</CustomLink>&nbsp;and
          listed on&nbsp;
          <CustomLink href="https://uses.tech">uses.tech</CustomLink>"
        </Text>
      </Container>
    </>
  );
}
