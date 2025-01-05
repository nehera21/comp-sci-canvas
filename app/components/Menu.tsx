import React from 'react';
import { HStack } from '@chakra-ui/react';
import MenuItem, { MenuItemProps } from './MenuItem';

export type MenuProps = {
  menuItems: MenuItemProps[];
};

export default function Menu(props: MenuProps) {
  const { menuItems } = props;
  return (
    <HStack spacing={2} ml={5} flexWrap="wrap">
      {menuItems.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </HStack>
  );
}
