import {CheckIcon} from '@/styles/icons';
import {ChevronDownIcon} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import {useState} from 'react';

import {CustomLink} from './MDXComponents';

const YearDivider = () => {
  const border = useColorModeValue('gray.200', 'gray.600');
  return <Divider borderColor = {border} my = {5} w = "100%" />;
};

const TimelineStep = ({title, children}) => {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  return (
    <ListItem>
      <Stack ml={2} mb={4}>
        <Flex alignContent="flex-start">
          <CheckIcon mr={2} mt={1} color="whatsapp.500" />
          <Heading as="h4" fontSize="lg" fontWeight="medium">
            {title}
          </Heading>
        </Flex>
        <Text color={secondaryText} pl={6}>
          {children}
        </Text>
      </Stack>
    </ListItem>
  );
};

const FullTimeLine = () => (
  <>
    <YearDivider />
    <Heading as="h3" fontSize="2xl" mb={4} letterSpacing="lighter">
      2019
    </Heading>
    <List>
      <TimelineStep title="Juara III Kompetisi Diskominfo Karawang 🏅">
        Berkolaborasi dengan tim sebagai Frontend developer. Menciptakan sebuah
        inovasi baru dengan membangun sebuah sistem "Smart City" berbasis
        website.
      </TimelineStep>
      <TimelineStep title="Partisipan Sertifikasi BNSP 🎉">
        Sebagai Web developer
      </TimelineStep>
    </List>
  </>
);

const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <Box py={5}>
      <Heading as="h2" fontSize="4xl" letterSpacing="tight" mb={2}>
        Linimasa
      </Heading>
      <Heading as="h3" fontSize="2xl" mb={4} letterSpacing="lighter">
        2020
      </Heading>
      <List>
        <TimelineStep title="Magang Pertama 👨🏼‍💻">
          Mengembangkan aplikasi ERP bersama orang-orang hebat di&nbsp;
          <CustomLink href="http://jiwalu.id">Jiwalu Studio</CustomLink> dan
          belajar banyak hal yang tidak saya dapatkan di bangku Perkuliahan.
        </TimelineStep>
        <TimelineStep title="Jatuh cinta pada Flutter 🎴">
          Pada awalnya hanya sekedar mencoba-coba, hingga akhirnya kecanduan
          mempelajarinya.
        </TimelineStep>
      </List>
      {isShowingFullTimeline ? (
        <FullTimeLine />
      ) : (
        <Button
          display = "block"
          my = {4} mx = "auto"
          fontWeight = "medium"
          variant = "ghost"
          onClick={() => showFullTimeline(true)}
          rightIcon={<ChevronDownIcon />}
        >
          Selengkapnya
        </Button>
      )}
    </Box>
  );
};

export default Timeline;
