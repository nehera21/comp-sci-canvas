import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import ListItem from './ListItem';

type Tag = {
  name: string;
  link: string;
  isLink: boolean;
};

type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  tags: Tag[];
};

type ItemListProps = {
  id: string;
  title: string;
  projects: Project[];
};

export default function ItemList({ id, title, projects }: ItemListProps) {
  return (
    <Box pl="6" pt="10" width="800px" justifyContent="right">
      <Heading size="2xl" pl="3" pb="8" pt="5" id={id}>
        {title}
      </Heading>
      {projects.map((project) => (
        <ListItem key={project.id} {...project} />
      ))}
    </Box>
  );
}
