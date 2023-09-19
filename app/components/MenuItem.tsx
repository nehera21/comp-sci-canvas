import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export type MenuProps = {
  jumpID: string;
  name: string;
};
export default function MenuItem(props: MenuProps) {
  const { jumpID, name } = props;
  const router = useRouter();
  console.log(jumpID);
  return (
    <Box fontSize={'2xl'} mt="8">
      <Button
        as={motion.button}
        onClick={() => router.push(`#${jumpID}`)}
        fontFamily="mono"
        bgColor="#225E68"
        color="#F6B75D"
        border="1px"
        borderColor="#F6B75D"
        width="100px"
        whileHover={{
          scale: 1.1,
          backgroundColor: '#F6B75D',
          color: '#225E68',
        }}
        whileTap={{ scale: 0.95 }}
      >
        {name}
      </Button>
    </Box>
  );
}
