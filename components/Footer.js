import { Flex, IconButton, Link, useColorMode } from '@chakra-ui/react';

import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon
} from '@/styles/icons';

const Footer = () => {
  const { colorMode } = useColorMode();

  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  return (
    <Flex align="center" my={4} direction="column">
      <div>
        <Link href="https://twitter.com/opakholis" title="Twitter" isExternal>
          <IconButton
            aria-label="Github"
            icon={<TwitterIcon boxSize={5} />}
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link href="https://github.com/opxop" title="Github" isExternal>
          <IconButton
            aria-label="Github"
            icon={<GithubIcon boxSize={5} />}
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/opakholis"
          title="LinkedIn"
          isExternal
        >
          <IconButton
            aria-label="LinkedIn"
            icon={<LinkedinIcon boxSize={5} />}
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link href="mailto:hello@opakholis.me" title="Email" isExternal>
          <IconButton
            aria-label="Email"
            icon={<MailIcon boxSize={5} />}
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
      </div>
      <Flex>
        <Link
          mx={2}
          color={secondaryTextColor[colorMode]}
          _focus={{ boxShadow: 'none' }}
          href="/uses"
        >
          /uses
        </Link>
        <Link
          mx={2}
          color={secondaryTextColor[colorMode]}
          _focus={{ boxShadow: 'none' }}
          href="/now"
        >
          /now
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
