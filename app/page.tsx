'use client';
import React from 'react';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import List from './components/List';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
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
          minWidth: '100vw',
          minHeight: '100vh',
          background: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -2,
        }}
      />
      <Box
        style={{
          minWidth: '100vw',
          height: '3320px',
          background:
            'linear-gradient(to bottom, rgba(18, 7, 89, 0.8), rgba(48, 6, 79, 0.8))',
          position: 'absolute',
          top: 0,
          left: 0,
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
          <Contact links={contacts} />
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
