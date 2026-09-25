import { ProjectCard } from "@/components/ProjectCard";
import {
  Box,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { gameDevProjects } from "@/content/projects/gameDevProjects";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const GameDevProjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Box
      py={{ base: 8, md: 16 }}
      backgroundColor="bg_blue"
      minHeight="100vh"
    >

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}
      <Box
        backgroundColor="secondary_blue"
        width={{ base: "92%", md: "88%", xl: "80%" }}
        maxWidth="1500px"
        mx="auto"
        rounded="3xl"
        px={{ base: 4, md: 6 }}
        py={{ base: 5, md: 6 }}
      >
        <Text
          textStyle="heading"
          textAlign="center"
          fontSize={{ base: "2xl", md: "4xl" }}
        >
          Game Development Projects
        </Text>
      </Box>


      {/* =====================================================
          PROJECT GRID
      ===================================================== */}
      <SimpleGrid
        columns={{
          base: 1,
          lg: 2,
        }}
        gap={{
          base: 6,
          md: 10,
        }}
        width={{
          base: "92%",
          md: "88%",
          xl: "80%",
        }}
        maxWidth="1500px"
        mx="auto"
        pt={{
          base: 6,
          md: 10,
        }}
      >
        {Object.entries(gameDevProjects).map(
          ([alias, project]) => (
            <ProjectCard
              key={alias}
              projectName={project.projectName}
              roles={project.role}
              description={project.description}
              tags={project.tags}
              imgSrc={project.cardImgSrc}
              onClick={() =>
                navigate(
                  "/game-dev-projects/" + alias
                )
              }
            />
          )
        )}
      </SimpleGrid>

    </Box>
  );
};


export default GameDevProjects;