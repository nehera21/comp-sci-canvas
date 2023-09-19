import React from 'react';
import MenuItem, { MenuProps as ItemProps } from './MenuItem';
import { Box } from '@chakra-ui/react';

type MenuProps = {
  menuItems: ItemProps[];
};
export default function Menu(props: MenuProps) {
  return (
    <Box pl="6" pt="10" width="600px" justifyContent="right">
      {props.menuItems.map((item: ItemProps) => (
        <MenuItem key={item.name} {...item} />
      ))}
    </Box>
  );
}
