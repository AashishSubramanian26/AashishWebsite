import { ProjectCard } from "@/components/ProjectCard";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { gameDevProjects } from "@/content/projects/gameDevProjects";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const GameDevProjects = () => {
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
          Game Dev Projects
        </Text>
      </Box>
      <SimpleGrid
        columns={[1, 1, 1, 1, 2]}
        spacing={10}
        width="80%"
        justifySelf="center"
        paddingTop={10}
      >
        {Object.entries(gameDevProjects).map(([alias, project], index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            role={project.role[0]}
            description={project.description}
            tags={project.tags}
            imgSrc={project.cardImgSrc}
            onClick={() => navigate("/game-dev-projects/" + alias)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameDevProjects;
