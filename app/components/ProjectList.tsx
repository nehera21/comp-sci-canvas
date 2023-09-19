import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Project, { ProjectProps } from './Project';

type ProjectListProps = {
  projects: ProjectProps[];
};
export default function ProjetList(props: ProjectListProps) {
  return (
    <Box pl="6" pt="10" width="620px" justifyContent="right" id="projects">
      <Heading size="2xl" pl="3" pb="8" pt="5">
        Projects
      </Heading>
      {props.projects.map((project: ProjectProps) => (
        <Project key={project.title} {...project} />
      ))}
    </Box>
  );
}
