import React from 'react';
import { List, ListItem, ListIcon, useColorMode } from '@chakra-ui/core';

const ListTech = ({ name }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  return (
    <List color={secondaryTextColor[colorMode]}>
      <ListItem>
        <ListIcon icon="chevron-right" />
        {name}
      </ListItem>
    </List>
  );
};

export default ListTech;
