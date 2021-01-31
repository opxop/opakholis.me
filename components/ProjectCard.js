import {
  Link,
  Text,
  Flex,
  Stack,
  Heading,
  useColorMode
} from '@chakra-ui/react';

const ProjectCard = ({ title, description, href, children }) => {
  const { colorMode } = useColorMode();

  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };

  const iconColor = {
    light: 'gray.900',
    dark: 'white'
  };

  return (
    <Stack w="100%" maxW="770px" mb={4}>
      <Link
        href={href}
        _hover={{
          boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
          textDecoration: 'none'
        }}
        isExternal
      >
        <Flex
          align="center"
          border="1px solid"
          borderColor={borderColor[colorMode]}
          borderRadius={4}
          p={4}
        >
          {children}
          <Stack>
            <Heading
              as="h4"
              size="md"
              fontWeight="bold"
              mb={1}
              letterSpacing="tighter"
            >
              {title}
            </Heading>
            <Text lineHeight="1.3" color={secondaryTextColor[colorMode]}>
              {description}
            </Text>
          </Stack>
        </Flex>
      </Link>
    </Stack>
  );
};

export default ProjectCard;
