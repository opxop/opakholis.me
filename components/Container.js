import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  HStack,
  Button,
  IconButton,
  useColorMode
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import Footer from './Footer';

export default function Container({ children }) {
  const { pathname } = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box h="6px" bgGradient="linear(to-l, #7928CA, #FF0080)" />
      <HStack
        as="nav"
        pos="sticky"
        top="0"
        p={(8, [4, 8])}
        mx="auto"
        mt={[2, 8]}
        zIndex="99"
        width="100%"
        maxWidth="780px"
        alignItems="center"
        justifyContent="space-between"
        bg={colorMode === 'dark' ? 'gray.900' : 'white'}
      >
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
        <HStack spacing={3}>
          <NavLink href="/" text="Home" isActive={pathname === '/'} />
          <NavLink
            href="/whoami"
            text="About"
            isActive={pathname.startsWith('/whoami')}
          />
          <NavLink
            href="/blog"
            text="Blog"
            isActive={pathname.startsWith('/blog')}
          />
        </HStack>
      </HStack>
      <Box as="main" maxW="768px" w="100%" px={[4, 8]} mx="auto">
        {children}
      </Box>
      <Footer />
    </>
  );
}

const NavLink = ({ text, href, isActive }) => {
  return (
    <Link href={href}>
      <Button
        as="a"
        px={[4, 5]}
        fontWeight="normal"
        cursor="pointer"
        variant={isActive ? 'solid' : 'ghost'}
      >
        {text}
      </Button>
    </Link>
  );
};
