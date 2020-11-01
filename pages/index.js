import React from "react";

import Container from "../components/Container";
import Timeline from "../components/Timeline";
import Landing from "../components/Landing";
import Project from "../components/Project";

const Index = () => {
  return (
    <Container>
      <Landing />
      <Project />
      <Timeline />
    </Container>
  );
};

export default Index;
