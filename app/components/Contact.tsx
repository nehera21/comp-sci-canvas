import React from 'react';
import { Box } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import { AnimatedBox } from './AnimatedBox';

export type ContactProps = {
  link: string;
  id: string;
  bgcolor: string;
  fgcolor: string;
};

export default function Contact({ link, bgcolor, fgcolor, id }: ContactProps) {
  return (
    <Box key={link} mr="9px">
      <AnimatedBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }}>
        <SocialIcon
          network={id}
          url={link}
          bgColor={bgcolor}
          fgColor={fgcolor}
          target="_blank"
          rel="noopener noreferrer"
        />
      </AnimatedBox>
    </Box>
  );
}
