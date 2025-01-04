import { Box } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import { AnimatedBox } from './AnimatedBox';

export type ContactProps = {
  link: string;
  id: string;
  color: string;
};

export default function Contact({ link, color }: ContactProps) {
  return (
    <Box key={link} mr="15px">
      <AnimatedBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }}>
        <SocialIcon
          url={link}
          bgColor={color}
          target="_blank"
          rel="noopener noreferrer"
        />
      </AnimatedBox>
    </Box>
  );
}
