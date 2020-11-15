import React from 'react';
const { Heading, Flex } = require('@chakra-ui/react');

import ProjectCard from './ProjectCard';
import { NextJS } from '../styles/icons/nextjs';
import { Progate } from '../styles/icons/progate';

const Project = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
    >
      <Heading letterSpacing="tight" mb={4} mt={16} size="xl" fontWeight={700}>
        Projects
      </Heading>
      <ProjectCard
        title="My Portfolio Website"
        description="NextJS - JAMstack application yang dikostumisasi dengan bantuan Chakra UI. Di-deploy menggunakan Vercel."
        href="https://opakholis.me/"
        icon={<NextJS w={10} h={10} />}
      />
      <ProjectCard
        title="Progate Mini Project"
        description="Sebuah Mini Project dari Komunitas Progate Indonesia. Dibangun menggunakan Tailwind CSS, Google API, dan Github Pages."
        href="https://opxop.github.io/Progate-Mini-Projects"
        icon={<Progate w={10} h={10} />}
      />
    </Flex>
  );
};

export default Project;
