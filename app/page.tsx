'use client';
import React from 'react';
import { Box, Flex, useBreakpointValue, HStack } from '@chakra-ui/react';
import List from './components/List';
import Header from './components/Header';
import About from './components/About';
import Contacts from './components/ContactList';
import Menu from './components/Menu';
import SkillList from './components/SkillList';
import Head from 'next/head';
import {
  background,
  header,
  about,
  contacts,
  projects,
  menuItems,
  skills,
  experience,
  research,
} from './configurations';

export default function Home() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Head>
        <title>Alexander Neher Portfolio</title>
      </Head>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          zIndex: -2,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          background:
            'linear-gradient(to bottom, rgba(10, 4, 50, 0.9), rgba(35, 4, 58, 0.9))',
          zIndex: -1,
        }}
      />
      <Flex
        minW="100vw"
        minH="100vh"
        color={'brand.text'}
        position="relative"
        direction="column"
      >
        <Box
          position={isDesktop ? 'fixed' : 'relative'}
          p={8}
          minH={isDesktop ? '100vh' : 'auto'}
          w={isDesktop ? '40vw' : '100%'}
          color="brand.text"
        >
          <Header {...header} />
          <Contacts contacts={contacts} />
          <Menu menuItems={menuItems} />
        </Box>
        <Box
          position="relative"
          p={[4, 8]}
          left={isDesktop ? '40vw' : '0'}
          minH={'100vh'}
          w={isDesktop ? '55vw' : '100%'}
          top={'0'}
          mt={isDesktop ? '0' : '20px'}
        >
          <About {...about} />
          <List title="Projects" id="projects" items={projects} />
          <List title="Experience" id="experience" items={experience} />
          <List title="Research" id="research" items={research} />
          <SkillList skills={skills} id="skills" />
        </Box>
      </Flex>
    </>
  );
}
