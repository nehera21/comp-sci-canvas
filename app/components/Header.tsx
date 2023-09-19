import React from 'react';
import { Heading, Stack } from '@chakra-ui/react';

export type HeaderProps = {
  title: string;
  subtitle: string;
  intro: string;
};

export default function Header(props: HeaderProps) {
  const { title, subtitle, intro } = props;
  return (
    <Stack h="40vh" w="40vw" pl="6" textAlign={'left'}>
      <Heading pt="10" pb="16px" fontFamily="mono" size={'2xl'}>
        {title}
      </Heading>
      <Heading pb="15px" fontFamily="mono" size="md">
        {subtitle}
      </Heading>
      <Heading pb="15px" fontFamily="mono" size="md">
        {intro}
      </Heading>
    </Stack>
  );
}
