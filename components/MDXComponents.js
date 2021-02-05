import {
  Box,
  Kbd,
  Code,
  Text,
  Link,
  Alert,
  Image,
  Divider,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const CustomLink = (props) => {
  const color = useColorModeValue('hsl(208, 99%, 44%)', 'hsl(208, 95%, 68%)');

  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color} {...props} />
      </NextLink>
    );
  }

  return <Link color={color} isExternal {...props} />;
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
    mb="0.8em"
    mt="1.5em"
  >
    {' '}
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="blue.500"
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
  const bg = useColorModeValue('blue.50', 'gray.800');

  return (
    <Alert
      mt={4}
      w="100%"
      borderRadius="md"
      bg={bg}
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          margin: ['2', '0', '2', '10']
        }
      }}
      {...props}
    />
  );
};

const Hr = () => {
  const border = useColorModeValue('gray.200', 'gray.600');
  return <Divider borderColor={border} my={4} w="100%" />;
};

const ImageZoom = (props) => {
  const overlayBgColorStart = useColorModeValue(
    'rgba(255, 255, 255, 0.1)',
    'rgba(23, 25, 35, 0.1)'
  );
  const overlayBgColorEnd = useColorModeValue(
    'rgba(255, 255, 255, 0.95)',
    'rgba(23, 25, 35, 0.95)'
  );

  return (
    <Zoom
      overlayBgColorStart={overlayBgColorStart}
      overlayBgColorEnd={overlayBgColorEnd}
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
  h1: (props) => <DocsHeading as="h1" fontSize="4xl" {...props} />,
  h2: (props) => <DocsHeading as="h2" fontSize="3xl" {...props} />,
  h3: (props) => <DocsHeading as="h3" fontSize="2xl" {...props} />,
  h4: (props) => <DocsHeading as="h4" fontSize="xl" {...props} />,
  h5: (props) => <DocsHeading as="h5" fontSize="lg" {...props} />,
  p: (props) => <Text as="p" my={4} lineHeight="tall" {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
  br: (props) => <Box height="24px" {...props} />,
  img: ImageZoom,
  a: CustomLink,
  blockquote: Quote,
  kbd: Kbd,
  hr: Hr,
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
