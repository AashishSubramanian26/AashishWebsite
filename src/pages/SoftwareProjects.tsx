import { ProjectCard } from "@/components/ProjectCard";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { softwareProjects } from "@/content/projects/softwareProjects";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//Hello
const SoftwareProjects = () => {
   const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Box paddingY={16} backgroundColor="bg_blue">
      <Box
        backgroundColor="secondary_blue"
        width="80%"
        justifySelf="center"
        rounded="3xl"
        paddingX={4}
        paddingY={4}
      >
        <Text textStyle="heading" align="center">
          Software Projects
        </Text>
      </Box>
      <SimpleGrid
        columns={[1, 1, 1, 1, 2]}
        spacing={10}
        width="80%"
        justifySelf="center"
        paddingTop={10}
      >
        {Object.entries(softwareProjects).map(([alias, project], index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            roles={project.role}
            description={project.description}
            tags={project.tags}
            imgSrc={project.cardImgSrc}
            onClick={() => navigate("/software-projects/" + alias)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SoftwareProjects;
