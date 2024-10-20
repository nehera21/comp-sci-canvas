import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import { AnimatedBox } from './AnimatedBox';

export type ContactProps = {
  links: string[];
};
export default function Contact(props: ContactProps) {
  return (
    <Flex pl="5">
      {props.links.map((link, index) => {
        return (
          <Box key={index} mr="15px">
            <AnimatedBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }}>
              <SocialIcon url={link} />
            </AnimatedBox>
          </Box>
        );
      })}
    </Flex>
  );
}
