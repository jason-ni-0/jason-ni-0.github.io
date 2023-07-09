import * as React from "react";
import {
  Flex,
  Avatar,
  Box,
  Text,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { MotionBox, MotionFlex } from "./motion";
import "style/style.css";
import UserIcon from "assets/images/user_icon.png";
import siteConfig from "configs/site-config";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true
};

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const Home = () => {
  return (
    <Flex direction="column" align="center">
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
          <Avatar
            size={"3xl"}
            src={UserIcon}
          />
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Box as="h3" fontSize="1xl" fontWeight="400" textAlign="left">
            Hey, I'm Jason, an undergraduate student majoring in 
            Applied Mathematics and Computer Science at Brown University. I'm interested in 
            building software for social good and advocating for causes by spreading education 
            to empower others.
          </Box>
          <Box>
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              size="lg"
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
      >
        <Box mt={10}>
          <Stack
            mb={10}
            mx={[0, 0, 10]}
            padding={4}
            align="start"
            borderLeft="4px solid"
            borderColor={"#brown"}
            color={"whatsapp"}
            _hover={{ shadow: "lg" }}
            backgroundColor={useColorModeValue("gray.100", "#1e2533")}
            rounded="sm"
            fontSize="md"
          >
            <Text textAlign="center" color="#brown" fontWeight="bold">
              Currently working on:
            </Text>
            <UnorderedList textAlign="left" paddingLeft={5} m={0}>
              <ListItem>
                Research on Architectural Support for Serverless with Professor Jonathan Balkind
              </ListItem>
              <ListItem>
                Supporting clinical studies by building tools for Professor Nhung Nguyen
              </ListItem>
              <ListItem>
                Advocating for a healthier future by leveraging modern communication methods
              </ListItem>
              <ListItem>
                <Link as={NavLink} to="/about" color="blue.500">
                  More info in About
                </Link>
              </ListItem>
            </UnorderedList>
          </Stack>
        </Box>
      </MotionBox>
    </Flex>
  );
};

export default Home;
