import React from 'react';
import {
  List,
  ListItem,
  ListIcon,
  useColorMode,
  Flex,
  Box,
  Text
} from '@chakra-ui/react';
import { HiBadgeCheck } from 'react-icons/hi';

const Skill = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <div>
      <Text color={secondaryTextColor[colorMode]} mt={4} mb={2}>
        Beberapa teknologi yang saya gunakan :
      </Text>
      <Flex>
        <Box mr={20}>
          <List color={secondaryTextColor[colorMode]}>
            <ListItem>
              <ListIcon as={HiBadgeCheck} mb="2px" />
              Javascript
            </ListItem>
          </List>
          <List color={secondaryTextColor[colorMode]}>
            <ListItem>
              <ListIcon as={HiBadgeCheck} mb="2px" />
              React
            </ListItem>
          </List>
          <List color={secondaryTextColor[colorMode]}>
            <ListItem>
              <ListIcon as={HiBadgeCheck} mb="2px" />
              Node.js
            </ListItem>
          </List>
        </Box>
        <Box>
          <List color={secondaryTextColor[colorMode]}>
            <ListItem>
              <ListIcon as={HiBadgeCheck} mb="2px" />
              Flutter
            </ListItem>
          </List>
          <List color={secondaryTextColor[colorMode]}>
            <ListItem>
              <ListIcon as={HiBadgeCheck} mb="2px" />
              Git
            </ListItem>
          </List>
        </Box>
      </Flex>
    </div>
  );
};
export default Skill;
