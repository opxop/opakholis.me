import NextLink from 'next/link';
import slugify from 'slugify';
import { NextSeo } from 'next-seo';
import {
  Box,
  Text,
  Link,
  Badge,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

import Container from '@/components/Container';

const url = 'https://opakholis.dev/pub';
const title = 'Publikasi - Opa Kholis Majid';
const description =
  'Tempat mempublikasikan sesuatu yang memang untuk dipublikasikan';

export default function Pub({ data }) {
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
            Publikasi.
          </Heading>
          <Text color={secondaryText} lineHeight="tall" mb={20}>
            Tempat mempublikasikan sesuatu yang memang untuk dipublikasikan
          </Text>

          {data.map(({ title, date, id }) => {
            const slug = slugify(title, { lower: true });
            return (
              <Box key={id} display="flex" justifyContent="space-between">
                <Badge variant="outline" py={1} px={2} ml={1}>
                  {date}
                </Badge>
                <NextLink href={`pub/${slug}`}>
                  <Link>
                    <Text>{title}</Text>
                  </Link>
                </NextLink>
              </Box>
            );
          })}
        </Box>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_DATABASE}`
  );
  const data = await res.json();

  if (!data) return { notFound: true };

  return {
    props: { data },
    revalidate: 1
  };
};
