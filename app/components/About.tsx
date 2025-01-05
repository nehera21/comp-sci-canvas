'use client';
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export type AboutProps = {
  text: string;
};

export default function About(props: AboutProps) {
  const { text } = props;
  return (
    <Box id="about" pr="2" w="100%" maxW="800px" mx="auto">
      <Text
        fontSize={['16px', '17px', '18px']}
        pl="12px"
        pr="3px"
        textAlign="justify"
        fontWeight="bold"
        color="white"
        lineHeight={1.8}
      >
        {text}
      </Text>
    </Box>
  );
}
