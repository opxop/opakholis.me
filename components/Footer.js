import React from 'react';
import { Flex, IconButton, Link, Text } from '@chakra-ui/react';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => (
  <Flex align="center" my={4} direction="column">
    <div>
      <Link
        href="https://twitter.com/opakholis"
        title="Twitter"
        _focus={{ boxShadow: 'none' }}
        isExternal
      >
        <IconButton
          as={FiTwitter}
          aria-label="Twitter"
          size="lg"
          p={4}
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://github.com/opxop"
        title="Github"
        _focus={{ boxShadow: 'none' }}
        isExternal
      >
        <IconButton
          as={FiGithub}
          aria-label="Github"
          size="lg"
          p={4}
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/opakholis"
        title="LinkedIn"
        _focus={{ boxShadow: 'none' }}
        isExternal
      >
        <IconButton
          as={FiLinkedin}
          aria-label="LinkedIn"
          size="lg"
          p={4}
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="mailto:hello@opakholis.me"
        title="Email"
        _focus={{ boxShadow: 'none' }}
        isExternal
      >
        <IconButton
          as={FiMail}
          aria-label="Email"
          size="lg"
          p={4}
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </div>
    <Text fontSize="sm" color="gray.500" minWidth="100px" mt={1}>
      Built with ❤️ using
      <Link
        href="https://nextjs.org"
        mx={1}
        _focus={{ border: 'none' }}
        isExternal
      >
        NextJS
      </Link>
      &copy; 2020
    </Text>
  </Flex>
);

export default Footer;
