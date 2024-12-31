import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Item, { ItemProps } from './Item';

export type ListProps = {
  title: string;
  items: ItemProps[];
  id: string;
};
export default function List(props: ListProps) {
  return (
    <Box pl={['2', '4', '6']} pt="10" w="100%" maxW="800px" mx="auto">
      <Heading size={['xl', '2xl']} pl={['2', '3']} pb="8" pt="5" id={props.id}>
        {props.title}
      </Heading>
      {props.items.map((item: ItemProps) => (
        <Item key={item.id} {...item} />
      ))}
    </Box>
  );
}
