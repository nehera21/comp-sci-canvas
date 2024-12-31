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
    <Stack pl="6" pb="10" textAlign={'left'}>
      <Heading pt="10px" fontFamily="mono" size={'2xl'}>
        {title}
      </Heading>
      <Heading fontFamily="mono" size="sm">
        {subtitle}
      </Heading>
      <Heading pt="20px" fontFamily="mono" size="md">
        {intro}
      </Heading>
    </Stack>
  );
}
