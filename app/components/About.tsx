'use client';
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export type AboutProps = {
  text: string;
};
export default function About(props: AboutProps) {
  const { text } = props;
  return (
    <Box id="about">
      <Text fontSize="18" fontFamily="mono" mt="45px" mr="30px" ml="28px">
        {text}
      </Text>
    </Box>
  );
}
