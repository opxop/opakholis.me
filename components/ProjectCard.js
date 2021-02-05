import {
  Box,
  Link,
  Text,
  Flex,
  Stack,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

const ProjectCard = ({ title, description, href, children }) => {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  const borderCard = useColorModeValue('gray.200', 'gray.600');
  const backgroundCard = useColorModeValue('gray.100', 'gray.800');

  return (
    <Box my={5}>
      <Link
        href={href}
        _hover={{
          textDecoration: 'none'
        }}
        isExternal
      >
        <Flex
          align="center"
          border="1px solid"
          borderColor={borderCard}
          borderRadius={4}
          transition=".5s ease-in-out"
          _hover={{
            background: `${backgroundCard}`
          }}
          p={4}
        >
          {children}
          <Stack>
            <Heading as="h4" fontSize="xl" letterSpacing="tighter">
              {title}
            </Heading>
            <Text lineHeight="1.3" color={secondaryText}>
              {description}
            </Text>
          </Stack>
        </Flex>
      </Link>
    </Box>
  );
};

export default ProjectCard;
