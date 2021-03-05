import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  Flex,
  Button,
  Divider,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import Footer from './Footer';
import NowPlaying from './NowPlaying';

const Container = ({ children }) => {
  const { pathname } = useRouter();

  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundNavbar = useColorModeValue('white', 'gray.900');

  return (
    <>
      <Box h="6px" bgGradient="linear(to-l, #7928CA, #FF0080)" />
      <Flex
        as="nav"
        pos="sticky"
        top="0"
        zIndex="9"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="780px"
        width="100%"
        bg={backgroundNavbar}
        p={8}
        mx="auto"
        my={[0, 8]}
      >
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant={pathname === '/' ? 'solid' : 'ghost'}
              px={[2, 3]}
              mr={1}
            >
              Home
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant={pathname.startsWith('/about') ? 'solid' : 'ghost'}
              px={[2, 3]}
              mr={1}
            >
              About
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button
              as="a"
              variant={pathname.startsWith('/blog') ? 'solid' : 'ghost'}
              px={[2, 3]}
            >
              Blog
            </Button>
          </NextLink>
        </Box>
      </Flex>
      <Box as="main" maxW="768px" w="100%" px={8} mx="auto">
        {children}
        <Divider orientation="horizontal" my={8} />
        <NowPlaying />
      </Box>
      <Footer />
    </>
  );
};

export default Container;
