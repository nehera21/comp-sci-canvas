import React from 'react';
import MenuItem from './MenuItem';
import { Box } from '@chakra-ui/react';

type MenuItemType = {
  name: string;
  jumpID: string;
};
type MenuProps = {
  menuItems: MenuItemType[];
};
export default function Menu({ menuItems }: MenuProps) {
  return (
    <Box pl="6" width="600px" justifyContent="right">
      {menuItems.map((item) => (
        <MenuItem key={item.jumpID} {...item} />
      ))}
    </Box>
  );
}
