'use client';
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import ProjectList from './components/ProjectList';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import SkillList from './components/SkillList';
import {
  header,
  about,
  contacts,
  projects,
  menuItems,
  skills,
} from './configurations';

export default function Home() {
  return (
    <Flex minW="100vw" minH="100vh" bgColor={'brand.bg'} color={'brand.text'}>
      <Box
        position="fixed"
        p={8}
        minH={'100vh'}
        minW={'100vw'}
        bgColor={'brand.bg'}
        color="brand.text"
      >
        <Header {...header} />
        <Contact links={contacts} />
        <Menu menuItems={menuItems} />
      </Box>
      <Box
        position="absolute"
        p={8}
        left="40vw"
        minH={'100vh'}
        minW={'55vw'}
        bgColor={'brand.bg'}
        top={'0'}
      >
        <About {...about} />
        <ProjectList projects={projects} />
        <SkillList skills={skills} />
      </Box>
    </Flex>
  );
}
