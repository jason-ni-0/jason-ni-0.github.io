import * as React from "react";
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import Projects from "./projects";
import { projectsList } from "data/projects-list";
import "style/style.css";

const ProjectsPage = () => {
  return (
    <Flex direction="column" align="center">
        <Box as="h3" fontSize="1xl" fontWeight="400" textAlign="left">
            <Projects projects={projectsList} />
        </Box>
    </Flex>
  );
};

export default ProjectsPage;
