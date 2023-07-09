import * as React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Link,
  Image
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  link: string;
  gitlink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  logo,
  link,
  gitlink,
}) => {
  const textColor = useColorModeValue("gray.500", "gray.200");

  return (
    <motion.div layout>
      <HStack
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        _hover={{ shadow: "lg" }}
      >
        <VStack align="start" justify="flex-start">
          <VStack spacing={3} align="start">
            <motion.div layout>
              <HStack>
                {link ? 
                <Text
                  as={Link}
                  href={link}
                  fontWeight="bold"
                  fontSize="lg"
                  noOfLines={1}
                  isExternal
                >
                  {title}
                </Text> : 
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  noOfLines={1}
                  isExternal
                >
                  {title}
                </Text>}
              </HStack>
            </motion.div>
                <Text fontSize="md" color={textColor}>
                  {description}
                </Text>
                <Image
              src={logo}
            />
          </VStack>
          <Link 
            href={gitlink}
            fontWeight="500"
            fontSize="sm"
            noOfLines={1}
            isExternal
          >
            <u>
            Github
            </u>
          </Link>
        </VStack>
      </HStack>
    </motion.div>
  );
};

export default ProjectCard;
