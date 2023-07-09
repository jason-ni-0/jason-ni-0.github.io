import * as React from "react";
import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Image,
  useColorMode,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import placeholder from "assets/images/placeholder.png";
import {
  PageSlideFade,
  StaggerChildren,
} from "./page-transitions";
import { MotionBox } from "./motion";
import { companies } from "data/data";
import Header from "./header";

interface CardProps {
  title: string;
  role: string;
  desc: string;
  period: string;
  logo: string;
  colorMode: string;
  alt: string;
}

const TURQUOISE = "#06b6d4";

const Card = (props: CardProps) => {
  const { title, role, desc, period, logo, colorMode, alt } = props;
  return (
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: "lg" }}
        bg={useColorModeValue("white", "gray.800")}
        position="relative"
        rounded="md"
      >
        <Flex>
            <Image
              w={16}
              h={16}
              objectFit="cover"
              fallbackSrc={placeholder}
              src={logo}
              alt={alt}
            />
            <Stack spacing={2} pl={3} align="left">
            <Flex justifyContent="space-between">
              <Heading
                align="left"
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {title}
              </Heading>
              <Stack display={["none", "none", "flex", "flex"]}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
          </Stack>
              </Flex>
              <Heading
                align="left"
                fontSize="lg"
                color={`mode.${colorMode}.career.subtext`}
              >
                {role}
              </Heading>
              <Text
                align="left"
                fontSize="md"
                color={`mode.${colorMode}.career.subtext`}
              >
                {desc}
              </Text>
            </Stack>
        </Flex>
      </Box>
  );
};

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <PageSlideFade>
      <StaggerChildren>
        <MotionBox>
          <Heading>
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                About Me
              </Header>
            </Flex>
          </Heading>
        </MotionBox>
        <Box as="h3" fontSize="1xl" fontWeight="400" textAlign="left" marginBottom={6} mx={[0, 0, 6]} mt={12}>
        <p>Hi, I'm Jason Ni. I'm a undergraduate student at Brown university pursuing 
        a Sc.B in Applied Mathematics-Computer Science. My interests are in building faster systems/architecture, 
        low level programming, and growing up with small business owners, I have always been interested in finance 
        + turning profits.</p>
        
        <br></br>

        <p>When I'm not programming, you can find me playing basketball or playing PC 
        games (used to play too much, was top 550 in Valorant lol). I also run a non-profit 
        organization, <Link href='https://forfuturelungs.org' color="blue.500" isExternal>For Future Lungs</Link>, 
        to spread light on the dangers of drug abuse. Plus I really love cooking, which I picked up working at 
        my parent's restaurant, so you can count on me to whip up a delicious meal!</p>
        </Box>
        <MotionBox>
          <Heading>
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Experience
              </Header>
            </Flex>
          </Heading>
        </MotionBox>
        <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={12}>
          {companies.map((company, index) => (
            <Card
              key={index}
              title={company.title}
              role={company.role}
              desc={company.desc}
              period={company.period}
              logo={company.logo}
              colorMode={colorMode}
            />
          ))}
        </VStack>
        {/*
        <Heading>
          <Flex alignItems="center">
            <Header underlineColor={TURQUOISE} mt={0} mb={0}>
              Education
            </Header>
          </Flex>
        </Heading>
        <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={12}>
          {institutes.map((institute, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <Card
                key={index}
                title={institute.title}
                role={institute.role}
                skills={institute.skills}
                period={institute.period}
                logo={institute.logo}
                colorMode={colorMode}
              />
            </MotionBox>
          ))}
        </VStack>
          */}
      </StaggerChildren>
    </PageSlideFade>
  );
};

export default About;
