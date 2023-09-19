'use client';
import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Tag, { TagProps } from './Tag';
import { AnimatedBox } from './AnimatedBox';

export type ProjectProps = {
  title: string;
  description: string;
  link: string;
  tags: TagProps[];
};
export default function Project(props: ProjectProps) {
  const { title, description, link, tags } = props;
  return (
    <Box pl="3" pb="5">
      <AnimatedBox
        as={motion.div}
        pl="2"
        pr="2"
        pt="3"
        pb="3"
        bg="#333333"
        border="1px"
        borderColor="white"
        borderRadius="10"
        whileHover={{ backgroundColor: '#444444', scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Heading fontSize="30" pb="7px">
          <a href={link}>{title}</a>
        </Heading>
        <Text pb="5px" fontSize="18">
          {description}
        </Text>
        <Flex>
          {tags.map((tags: TagProps) => (
            <Tag {...tags} key={tags.name} />
          ))}
        </Flex>
      </AnimatedBox>
    </Box>
  );
}
