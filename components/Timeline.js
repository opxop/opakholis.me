import { useState } from 'react';
import {
  Divider,
  Flex,
  Heading,
  Button,
  List,
  Stack,
  Text,
  ListItem,
  useColorMode,
  Link
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { CheckIcon } from '@/styles/icons';

const YearDivider = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };

  return <Divider borderColor={borderColor[colorMode]} my={5} w="100%" />;
};

const TimelineStep = ({ title, children }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <ListItem>
      <Stack ml={2} mb={4}>
        <Flex align="center">
          <CheckIcon mr={2} color="whatsapp.500" />
          <Text fontWeight="medium">{title}</Text>
        </Flex>
        <Text color={secondaryTextColor[colorMode]} pl={6}>
          {children}
        </Text>
      </Stack>
    </ListItem>
  );
};

const FullTimeLine = () => (
  <>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="lighter">
      2019
    </Heading>
    <List>
      <TimelineStep title="3rd Place at Diskominfo Karawang Competition 🏅">
        Berkolaborasi dengan tim sebagai Frontend developer. Menciptakan sebuah
        inovasi baru dengan membangun sebuah sistem "Smart City" berbasis
        website.
      </TimelineStep>
      <TimelineStep title="Got BNSP Certified 🎉">
        Sebagai Web developer
      </TimelineStep>
    </List>
  </>
);

const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
    >
      <Heading letterSpacing="tight" mb={4} mt={8} size="xl" fontWeight="bold">
        Timeline
      </Heading>
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="lighter"
      >
        2020
      </Heading>
      <List>
        <TimelineStep title="Landed First Internship 👨🏼‍💻">
          Merupakan 3 bulan yang sangat berharga. Bersama orang-orang hebat di{' '}
          <Link href="http://jiwalu.id" isExternal>
            Jiwalu Studio
          </Link>{' '}
          saya banyak belajar hal baru.
        </TimelineStep>
        <TimelineStep title="Fallin' in Love with Flutter 🎴">
          Pada awalnya hanya sekedar mencoba-coba, hingga akhirnya jatuh cinta.
        </TimelineStep>
      </List>
      {isShowingFullTimeline ? (
        <FullTimeLine />
      ) : (
        <Button
          my={4}
          mx="auto"
          fontWeight="medium"
          variant="ghost"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <ChevronDownIcon ml={2} />
        </Button>
      )}
    </Flex>
  );
};

export default Timeline;
