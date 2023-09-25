'use client';
import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

export type AboutProps = {
  text: string;
};
export default function About(props: AboutProps) {
  const { text } = props;
  return (
    <Box id="about">
      <Heading size="2xl" pl="3" pb="8" pt="5">
        About
      </Heading>
      <Text fontSize="18" fontFamily="mono" mt="45px" mr="30px" ml="28px">
        {text}
      </Text>
    </Box>
  );
}
