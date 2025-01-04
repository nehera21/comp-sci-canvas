import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

export type MenuItemProps = {
  name: string;
  id: string;
};

export default function MenuItem({ name, id }: MenuItemProps) {
  const handleClick = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box fontSize={'2xl'} mt="8">
      <Button
        onClick={handleClick}
        fontFamily="mono"
        bgColor="transparent"
        color="brand.accent"
        border="1px"
        borderColor="brand.accent"
        width="100px"
        _hover={{
          backgroundColor: '#F6B75D',
          color: '#30064f',
          width: '200px',
          transition: 'all 0.3s ease',
        }}
      >
        {name}
      </Button>
    </Box>
  );
}
