import {
  Alert,
  Image,
  Box,
  Code,
  Heading,
  Text,
  Link,
  useColorMode
} from '@chakra-ui/react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const CustomLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'hsl(208, 99%, 44%)',
    dark: 'hsl(208, 95%, 68%)'
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
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
        marginTop: '-5rem',
        visibility: 'hidden',
        content: `""`
      },
      '&[id]:hover a': { opacity: 1 }
    }}
    {...props}
  >
    {' '}
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="purple.500"
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
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'blue.50',
    dark: 'gray.800'
  };

  return (
    <Alert
      mt={4}
      w="100%"
      borderRadius="md"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8
        }
      }}
      {...props}
    />
  );
};

const ImageZoom = (props) => {
  const { colorMode } = useColorMode();
  const overlayBgColorStart = {
    light: 'rgba(255, 255, 255, 0.1)',
    dark: 'rgba(23, 25, 35, 0.1)'
  };
  const overlayBgColorEnd = {
    light: 'rgba(255, 255, 255, 0.95)',
    dark: 'rgba(23, 25, 35, 0.95)'
  };

  return (
    <Zoom
      overlayBgColorStart={overlayBgColorStart[colorMode]}
      overlayBgColorEnd={overlayBgColorEnd[colorMode]}
      zoomMargin={50}
    >
      <Image
        rounded="sm"
        {...props}
        src={props.src}
        alt={props.alt}
        fallbackSrc={props.src}
      />
    </Zoom>
  );
};

const MDXComponents = {
  h1: (props) => <DocsHeading as="h1" size="xl" mb={-4} {...props} />,
  h2: (props) => (
    <DocsHeading as="h2" size="lg" mb={-4} fontWeight="bold" {...props} />
  ),
  h3: (props) => (
    <DocsHeading as="h3" size="md" mb={-4} fontWeight="bold" {...props} />
  ),
  h4: (props) => (
    <DocsHeading as="h4" size="s" mb={-4} fontWeight="bold" {...props} />
  ),
  h5: (props) => (
    <DocsHeading as="h5" size="xs" mb={-4} fontWeight="bold" {...props} />
  ),
  img: ImageZoom,
  a: CustomLink,
  br: (props) => <Box height="24px" {...props} />,
  p: (props) => <Text as="p" lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
  blockquote: Quote,
  inlineCode: (props) => (
    <Code
      colorScheme="yellow"
      fontSize="0.84em"
      px={2}
      borderRadius="md"
      {...props}
    />
  )
};

export { CustomLink };
export default MDXComponents;
