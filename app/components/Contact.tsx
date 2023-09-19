import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import { colors } from '../Providers';

export type ContactProps = {
  links: string[];
};
export default function Contact(props: ContactProps) {
  return (
    <Flex pl="5">
      {props.links.map((link) => {
        return (
          <Box mr="15px" key={link}>
            <SocialIcon url={link} bgColor={colors.brand.accent} />
          </Box>
        );
      })}
    </Flex>
  );
}
