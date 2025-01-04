import React from 'react';
import { Text } from '@chakra-ui/react';
import { AnimatedBox } from './AnimatedBox';

export type TagProps = {
  name: string;
  link: string;
  isLink: boolean;
  id: string;
};
export default function Tag(props: TagProps) {
  const { name, link, isLink } = props;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLink) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {isLink && (
        <AnimatedBox
          bgColor="brand.accent"
          borderRadius={'15px'}
          pl="2"
          pr="2"
          mr="2"
          whileHover={{ backgroundColor: '#FFEC96' }}
          whileTap={{ backgroundColor: '#FFFFE0', scale: 0.98 }}
          onClick={handleClick}
        >
          <Text as="span" cursor="pointer" color="#333333">
            {name}
          </Text>
        </AnimatedBox>
      )}
      {!isLink && (
        <Text
          color="#333333"
          bgColor="brand.accent"
          borderRadius={'15px'}
          pl="2"
          pr="2"
          mr="2"
        >
          {name}
        </Text>
      )}
    </>
  );
}
