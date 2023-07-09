import * as React from "react";
import { VStack, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./project-card";
import Header from "./header";
import { AnimateSharedLayout } from "framer-motion";
import { MotionBox } from "./motion";

interface ProjectsProps {
  projects: project[];
}

const ORANGE = "#ff9400";

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <VStack align="start" spacing={8}>
      <Header underlineColor={ORANGE} mt={0} mb={0}>
        Projects
      </Header>
      <AnimateSharedLayout>
        <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
          {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.desc}
                blurHash={project.blurHash}
                logo={project.logo}
                link={project.link}
                gitlink={project.gitlink}
              />
          ))}
        </SimpleGrid>
      </AnimateSharedLayout>
    </VStack>
  );
};

export default Projects;
