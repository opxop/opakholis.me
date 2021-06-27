/* eslint-disable react/display-name */
import NextLink from 'next/link';
import Image from 'next/image';
import { jsx } from '@emotion/react';
import {
  Box,
  Kbd,
  Code,
  Text,
  Link,
  Alert,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link
          textDecor="underline"
          _hover={{
            textDecor: 'none',
            borderBottom: '3px solid',
            borderImage: 'linear-gradient(to left, #7928CA, #FF0080) 1',
            transition: 'border-image 5s ease-in-out'
          }}
          {...props}
        />
      </NextLink>
    );
  }
  return (
    <Link
      textDecor="underline"
      _hover={{
        textDecor: 'none',
        borderBottom: '3px solid',
        borderImage: 'linear-gradient(to left, #7928CA, #FF0080) 1',
        transition: 'border-image 5s ease-in-out'
      }}
      isExternal
      {...props}
    />
  );
};

const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px', // Safari
      '&[id]': {
        pointerEvents: 'none'
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`
      },
      '&[id]:hover a': { opacity: 1 }
    }}
    {...props}
    mb="0.3em"
    mt="2em"
  >
    {' '}
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="#7928CA"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: 'outline'
          }}
          opacity="0"
          ml="0.5rem"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
);

const Quote = (props) => {
  const color = useColorModeValue('gray.300', 'gray.700');
  return (
    <Alert
      mt={6}
      w="100%"
      bg="transparent"
      variant="left-accent"
      // status="error"
      borderLeft="4px"
      borderLeftColor={color}
      css={{
        '> *:first-of-type': {
          margin: ['2', '0', '2', '10']
        }
      }}
      {...props}
    />
  );
};

const Caption = (props) => {
  const color = useColorModeValue('gray.500', 'gray.400');
  return (
    <Text
      as="span"
      fontSize="sm"
      fontStyle="italic"
      color={color}
      display="table"
      mx="auto"
      {...props}
    />
  );
};

const Tick = () => {
  const color = useColorModeValue('gray.300', 'gray.700');
  return (
    <Text textAlign="center" fontSize="5xl" color={color}>
      ,,
    </Text>
  );
};

const MDXComponents = {
  h1: (props) => <DocsHeading as="h1" fontSize="4xl" {...props} />,
  h2: (props) => <DocsHeading as="h2" fontSize="3xl" {...props} />,
  h3: (props) => <DocsHeading as="h3" fontSize="2xl" {...props} />,
  h4: (props) => <DocsHeading as="h4" fontSize="xl" {...props} />,
  h5: (props) => <DocsHeading as="h5" fontSize="lg" {...props} />,
  p: (props) => <Text as="p" mt={5} lineHeight="taller" {...props} />,
  br: (props) => <Box height="24px" {...props} />,
  Image,
  Caption,
  CustomLink,
  a: CustomLink,
  blockquote: Quote,
  kbd: Kbd,
  hr: Tick,
  inlineCode: (props) => (
    <Code
      colorScheme="yellow"
      fontSize="0.84em"
      px={2}
      borderRadius="md"
      {...props}
    />
  ),
  ol: (props) => (
    <Box as="ol" lineHeight="taller" pt={2} pl={4} ml={2} {...props} />
  ),
  ul: (props) => (
    <Box as="ul" lineHeight="taller" pt={2} pl={4} ml={2} {...props} />
  ),
  li: (props) => <Box as="li" lineHeight="taller" pb={1} {...props} />
};

export { CustomLink };
export default MDXComponents;
