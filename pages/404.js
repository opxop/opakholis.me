import NextLink from 'next/link';
import { useColorMode, Heading, Text, Flex, Button } from '@chakra-ui/react';

import Container from '@/components/Container';

const Error = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="700px"
      >
        <Heading letterSpacing="tight" mb={10} as="h1" size="xl">
          451 - Unavailable For Legal Reasons
        </Heading>
        <Text color={secondaryTextColor[colorMode]} mt={4}>
          Kenapa harus menampilkan kode error "404" jika saya bisa membuatnya
          terdengar misterius?
        </Text>
        <NextLink href="/" passHref>
          <Button as="a" p={[1, 4]} w="250px" fontWeight="bold" m="5rem 1rem">
            Kembali ke Home
          </Button>
        </NextLink>
      </Flex>
    </Container>
  );
};

export default Error;
