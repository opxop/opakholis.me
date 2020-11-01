import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  useColorMode,
  Flex,
  Box,
  Text,
} from "@chakra-ui/core";

const Skill = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <div>
      <Text color={secondaryTextColor[colorMode]} mt={3} mb={1}>
        Beberapa teknologi yang saya gunakan :
      </Text>
      <Flex>
        <Box mr={20}>
          <List color={secondaryTextColor[colorMode]}>
            <ListItem>
              <ListIcon icon="chevron-right" />
              Javascript (ES6+)
            </ListItem>
          </List>
          <List color={secondaryTextColor[colorMode]}>
            <ListItem>
              <ListIcon icon="chevron-right" />
              React
            </ListItem>
          </List>
          <List color={secondaryTextColor[colorMode]}>
            <ListItem>
              <ListIcon icon="chevron-right" />
              Node.js
            </ListItem>
          </List>
        </Box>
        <Box>
          <List color={secondaryTextColor[colorMode]}>
            <ListItem>
              <ListIcon icon="chevron-right" />
              Flutter
            </ListItem>
          </List>
          <List color={secondaryTextColor[colorMode]}>
            <ListItem>
              <ListIcon icon="chevron-right" />
              Git
            </ListItem>
          </List>
        </Box>
      </Flex>
    </div>
  );
};
export default Skill;
