import React from "react";
const { Heading, Flex } = require("@chakra-ui/core");

import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
    >
      <Heading letterSpacing="tight" mb={4} mt={20} size="xl" fontWeight={700}>
        Projects
      </Heading>
      <ProjectCard
        title="My Portfolio Website"
        description="NextJS - JAMstack application yang dikostumisasi dengan bantuan Chakra UI. Di-deploy menggunakan Vercel."
        href="https://opakholis.me/"
        icon="nextjs"
      />
      <ProjectCard
        title="Progate Mini Project"
        description="Sebuah Mini Project dari Komunitas Progate Indonesia. Dibangun menggunakan Tailwind CSS, Google API, dan Github Pages."
        href="https://opxop.github.io/Progate-Mini-Projects"
        icon="progate"
      />
    </Flex>
  );
};

export default Project;
