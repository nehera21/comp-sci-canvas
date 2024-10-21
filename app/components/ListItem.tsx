'use client';
import React from 'react';
import { Box, Heading, Text, Flex, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Tag from './Tag';
import { AnimatedBox } from './AnimatedBox';

type Tag = {
  name: string;
  link: string;
  isLink: boolean;
};

type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  tags: Tag[];
};

export default function ListItem({
  title,
  description,
  link,
  image,
  tags,
}: Project) {
  return (
    <Box pl="3" pb="5">
      <AnimatedBox
        as={motion.div}
        pl="2"
        pr="2"
        pt="3"
        pb="3"
        bg="transparent"
        border="1px"
        borderColor="brand.accent"
        borderRadius="10"
        whileHover={{ boxShadow: '5px 5px 10px #333333' }}
      >
        <Flex direction="row">
          <Box width="70%">
            <Flex
              direction="column"
              justifyContent="space-between"
              height="100%"
            >
              <Heading
                fontSize="30"
                pb="7px"
                pl="5px"
                color="white"
                fontWeight="bolder"
              >
                {title}
              </Heading>
              <Text
                pb="5px"
                pl="5px"
                fontSize="18"
                color="white"
                fontWeight="bold"
              >
                {description}
              </Text>
              <Flex>
                {tags.map((tag: Tag) => (
                  <Tag {...tag} key={tag.name} />
                ))}
              </Flex>
            </Flex>
          </Box>
          <Box width="30%">
            <img src={image} alt={title} />
          </Box>
        </Flex>
      </AnimatedBox>
    </Box>
  );
}
