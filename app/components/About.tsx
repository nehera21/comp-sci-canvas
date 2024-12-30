'use client'
import React from 'react';
import { Box, Text } from '@chakra-ui/react'

export type AboutProps = {
    text: string
}

export default function About(props: AboutProps) {
  const { text } = props;
  return (
    <Box 
      id='about'
      w='100%'  // Take full width of parent
      maxW='800px'  // Maximum width on larger screens
      mx='auto'  // Center the box
    >
      <Text 
        fontSize={['16px', '18px']}  // Responsive font size
        fontFamily='mono' 
        p={['15px', '15px 35px']}  // Responsive padding
        textAlign='justify'
      >
        {text}
      </Text>
    </Box>
  )
}
