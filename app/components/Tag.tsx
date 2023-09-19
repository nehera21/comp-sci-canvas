import React from 'react';
import { Text } from '@chakra-ui/react';
import { AnimatedBox } from './AnimatedBox';

export type TagProps = {
  name: string;
  link: string;
  isLink: boolean;
};
export default function Tag(props: TagProps) {
  const { name, link, isLink } = props;
  return (
    <AnimatedBox
      bgColor="brand.accent"
      borderRadius={'15px'}
      pl="2"
      pr="2"
      ml="2"
      mr="2"
      whileHover={{ backgroundColor: '#FFEC96' }}
      whileTap={{ backgroundColor: '#FFFFE0', scale: 0.98 }}
    >
      {isLink && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Text color="#333333">{name}</Text>
        </a>
      )}
      {!isLink && <Text color="#333333">{name}</Text>}
    </AnimatedBox>
  );
}
