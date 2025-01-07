'use client';
import React from 'react';
import { Box, Heading, Text, Flex, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Tag, { TagProps } from './Tag';
import { AnimatedBox } from './AnimatedBox';

export type ItemProps = {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: TagProps[];
  id: string;
};
export default function Item(props: ItemProps) {
  const { title, description, link, image, tags } = props;

  const ContentBlock = (
    <Flex direction={['column', 'column', 'row']} gap={['3', '4']} width="100%">
      <Box
        width={['100%', '100%', '70%']}
        flex={['1 1 auto', '1 1 auto', '0 0 70%']}
      >
        <Flex
          direction="column"
          justifyContent="space-between"
          height="100%"
          width="100%"
        >
          <Heading
            fontSize={['24px', '27px', '30px']}
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
            fontSize={['16px', '17px', '18px']}
            color="white"
            fontWeight="bold"
          >
            {description}
          </Text>
          <Flex flexWrap="wrap" gap="2">
            {tags.map((tags: TagProps) => (
              <Tag {...tags} key={tags.id} />
            ))}
          </Flex>
        </Flex>
      </Box>
      <Box
        width={['100%', '100%', '30%']}
        flex={['1 1 auto', '1 1 auto', '0 0 30%']}
        display="flex"
        alignItems="center"
        justifyContent="center"
        pr="20px"
      >
        <Box
          position="relative"
          width="100%"
          paddingBottom="100%"
          overflow="hidden"
          borderRadius="10px"
        >
          <img
            src={image}
            alt={title}
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '10px',
            }}
          />
        </Box>
      </Box>
    </Flex>
  );

  return (
    <Box pl={['2', '3']} pr={['2', '3']} pb="5">
      <AnimatedBox
        as={motion.div}
        p={['2', '3']}
        bg="transparent"
        border="1px"
        borderColor="brand.accent"
        borderRadius="10"
        {...(link && {
          whileHover: { scale: 1.02, boxShadow: '5px 5px 10px #333333' },
          whileTap: { scale: 0.98 },
        })}
      >
        {link ? (
          <Link
            href={link}
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ContentBlock}
          </Link>
        ) : (
          ContentBlock
        )}
      </AnimatedBox>
    </Box>
  );
}
