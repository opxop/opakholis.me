import React from 'react';
import { List, ListItem, ListIcon, useColorMode } from '@chakra-ui/react';
import { HiBadgeCheck } from 'react-icons/hi';

const ListSkill = ({ name }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  return (
    <List color={secondaryTextColor[colorMode]}>
      <ListItem>
        <ListIcon as={HiBadgeCheck} mb="2px" />
        {name}
      </ListItem>
    </List>
  );
};

export default ListSkill;
