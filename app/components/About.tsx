'use client';
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export type AboutProps = {
  text: string;
};

export default function About(props: AboutProps) {
  const { text } = props;
  return (
    <Box id="about" pr="3" w="100%" maxW="800px" mx="auto">
      <Text
        fontSize={['16px', '18px']}
        fontFamily="mono"
        p={['15px', '15px 35px']}
        textAlign="justify"
      >
        {text}
      </Text>
    </Box>
  );
}
