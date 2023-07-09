import * as React from "react";
import {
  Stack,
  Flex
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent="space-between"
      alignItems="center"
      w={["100%", "85%", "80%"]}
      maxW={800}
      mx="auto"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="100%"
        ju
      >
        
      </Flex>
    </Stack>
  );
};

export default Footer;
