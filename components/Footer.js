import {
  Box,
  Link,
  VStack,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';

import { MailIcon, GithubIcon, TwitterIcon } from '@/styles/icons';

export default function Footer() {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');

  return (
    <VStack as="footer" mb={5} mt={2} spacing={0}>
      <Box>
        <Icon
          href="https://twitter.com/opakholis"
          ariaLabel="Twitter"
          icon={<TwitterIcon boxSize={5} />}
        />
        <Icon
          href="https://github.com/opxop"
          ariaLabel="Github"
          icon={<GithubIcon boxSize={5} />}
        />
        <Icon
          href="mailto:hi@opakholis.me"
          ariaLabel="Email"
          icon={<MailIcon boxSize={5} />}
        />
      </Box>

      <Box>
        <Link mx={2} color={secondaryText} href="/uses">
          /uses
        </Link>
        <Link mx={2} color={secondaryText} href="/now">
          /now
        </Link>
        <Link mx={2} color={secondaryText} href="/advice">
          /advice
        </Link>
      </Box>
    </VStack>
  );
}

const Icon = ({ href, ariaLabel, icon }) => {
  return (
    <IconButton
      as="a"
      href={href}
      icon={icon}
      aria-label={ariaLabel}
      size="lg"
      variant="ghost"
      color="gray.500"
      target="_blank"
      rel="noreferrer noopener"
    />
  );
};
