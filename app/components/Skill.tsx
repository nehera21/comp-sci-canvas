import React from 'react';
import { motion } from 'framer-motion';
import { Center, Image } from '@chakra-ui/react';
import { AnimatedBox } from './AnimatedBox';

export type SkillProps = {
  image: string;
  name: string;
  color: string;
};
export default function Skill(props: SkillProps) {
  const { image, name, color } = props;
  return (
    <AnimatedBox>
      <Center
        as={motion.div}
        bgColor="#333333"
        boxSize="150px"
        borderColor={color}
        border="1px"
        whileHover={{ scale: 1.03, boxShadow: '5px 5px 10px ' + color }}
        whileTap={{ scale: 0.98 }}
      >
        <Image src={image} alt={name} boxSize="130px" objectFit="contain" />
      </Center>
      {/*<Heading size='lg'>
                {name}
            </Heading>*/}
    </AnimatedBox>
  );
}
