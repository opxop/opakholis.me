import useSWR from 'swr';
import { NextSeo } from 'next-seo';
import {
  Box,
  Text,
  Heading,
  useColorModeValue,
  Spinner,
  Flex
} from '@chakra-ui/react';

import Container from '@/components/Container';
import AdviceForm from '@/components/AdviceForm';
import AdviceMessage from '@/components/AdviceMessage';
import fetcher from '@/lib/fetcher';

const url = 'https://opakholis.dev/advices';
const title = 'Pesanmu — Opa Kholis Majid';
const description =
  'Halaman ini dibuat untuk menampung segala keluh kesah, pendapat, informasi, atau bahkan nasihat untuk Opa Kholis Majid.';

export default function AdviceMe() {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  const spinner = useColorModeValue('gray.900', 'white');

  const { data } = useSWR('/api/advices', fetcher);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Container>
        <Box pn={5} pt={2}>
          <Heading as="h1" fontSize="5xl" letterSpacing="tight" my={5}>
            Pesan untuk Opa.
          </Heading>
          <Text color={secondaryText} lineHeight="tall">
            Halaman ini dibuat untuk menampung segala keluh kesah, pendapat,
            informasi, atau bahkan nasihat untuk <b>Opa Kholis Majid</b>.
          </Text>
          <AdviceForm />
          {data ? (
            <AdviceMessage advices={data.advices} />
          ) : (
            <Flex justifyContent="center" justifyItems="center">
              <Spinner thickness="3px" speed="0.65s" color={spinner} />
            </Flex>
          )}
        </Box>
      </Container>
    </>
  );
}
