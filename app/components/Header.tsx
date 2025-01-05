import React from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';

export type HeaderProps = {
  title: string;
  subtitle: string[];
};
export default function Header(props: HeaderProps) {
  const { title, subtitle } = props;

  const sequence = subtitle.reduce((acc: (string | number)[], curr) => {
    return [...acc, curr, 1500];
  }, []);

  return (
    <Stack pl="6" pb="10" textAlign={'left'}>
      <Heading pt="10px" fontFamily="mono" size={'2xl'}>
        {title}
      </Heading>
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={50}
        style={{
          fontSize: '25px',
          display: 'inline-block',
          fontWeight: 'bold',
        }}
        repeat={Infinity}
      />
    </Stack>
  );
}
