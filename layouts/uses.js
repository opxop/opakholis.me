import { NextSeo } from 'next-seo';
import { Heading, Text, Box, useColorModeValue } from '@chakra-ui/react';

import Container from '@/components/Container';
import { CustomLink } from '@/components/MDXComponents';

export default function UsesLayout({ children }) {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');

  return (
    <Container>
      <NextSeo
        title="Uses - Opa Kholis Majid"
        description="What i use… and why?"
        canonical="https://opakholis.me/uses"
        openGraph={{
          url: 'https://opakholis.me/uses',
          title: 'Uses - Opa Kholis Majid',
          description: 'What i use… and why?'
        }}
      />
      <Box mb={5}>
        <Heading as="h1" fontSize="5xl" letterSpacing="tight" my={5}>
          What I Use.
        </Heading>
        <Text color={secondaryText}>
          Although no one cares to ask me what I use 😂 but, here is a list of
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
  );
}
