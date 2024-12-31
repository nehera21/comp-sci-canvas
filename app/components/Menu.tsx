import React from 'react';
import MenuItem, { MenuItemProps } from './MenuItem';
import { Box } from '@chakra-ui/react';

export type MenuProps = {
  menuItems: MenuItemProps[];
};
export default function Menu(props: MenuProps) {
  return (
    <Box pl="6" width="600px" justifyContent="right">
      {props.menuItems.map((item: MenuItemProps) => (
        <MenuItem {...item} key={item.id} />
      ))}
    </Box>
  );
}
