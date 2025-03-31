import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { gameDevProjects } from "@/content/projects/gameDevProjects";
import { MediaCarousel } from "@/components/MediaCarousel";
import { useEffect } from "react";
import { Tag } from "@/components/Tag";

const GameDevProject = () => {
  const { projectName } = useParams();
  const project = gameDevProjects[projectName];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box paddingY={16} backgroundColor="bg_blue">
      <VStack rowGap={10} justifySelf="center" width="80%">
        <Box
          backgroundColor="secondary_blue"
          width="full"
          rounded="3xl"
          paddingX={4}
          paddingY={4}
        >
          <Text textStyle="heading" align="center">
            {project.projectName}
          </Text>
        </Box>
        <HStack width="100%" marginTop="-6" justifyContent={"space-between"}>
          <HStack>{project.tags.map((tag: string,  index) => <Tag text={tag} />)}</HStack>
          <Tag text={project.linkText} type="link" cursor={"pointer"}
                onClick={() =>
                  window.open(
                    project.link,
                    "_blank"
                  )
                }/>
          </HStack>
        <HStack width="100%" height="500px" alignItems="stretch" gap={10}>
          <Box width={"50%"} height="100%" rounded="3xl" overflow={"hidden"}>
            <MediaCarousel items={project.mediaContent} />
          </Box>
          <HStack width="50%">
            <VStack width="100%" height="100%">
              <Box
                width="100%"
                rounded="3xl"
                padding={8}
                backgroundColor="secondary_blue"
                height="40%"
              >
                <Text textStyle="h2" pb={4}>
                  Role{project.role.length > 1 && "s"}
                </Text>
                {project.role.map((feature: string, index) => (
                  <Text textStyle="description" key={index}>
                    {feature}
                  </Text>
                ))}
              </Box>
              <Box
                width="100%"
                rounded="3xl"
                padding={8}
                backgroundColor="secondary_blue"
                height="60%"
              >
                <Text textStyle="h2" pb={4}>
                  Genres
                </Text>
                {project.genre.map((feature: string, index) => (
                  <Text textStyle="description" key={index}>
                    {feature}
                  </Text>
                ))}
              </Box>
            </VStack>
            <VStack width="100%" height="100%">
              <Box
                width="100%"
                rounded="3xl"
                padding={8}
                backgroundColor="secondary_blue"
                height="40%"
              >
                <Text textStyle="h2" pb={4}>
                  Development Tools
                </Text>
                {project.developmentTools.map((feature: string, index) => (
                  <Text textStyle="description" key={index}>
                    {feature}
                  </Text>
                ))}
              </Box>
              <Box
                width="100%"
                rounded="3xl"
                padding={8}
                backgroundColor="secondary_blue"
                height="60%"
              >
                <Text textStyle="h2" pb={4}>
                  Key Features
                </Text>
                {project.keyFeatures.map((feature: string, index) => (
                  <Text textStyle="description" key={index}>
                    {feature}
                  </Text>
                ))}
              </Box>
            </VStack>
          </HStack>
        </HStack>
        <HStack width="100%" gap={10} alignItems="stretch">
          <Box
            width="100%"
            backgroundColor="secondary_blue"
            rounded="3xl"
            padding={8}
          >
            <Text textStyle="h2" pb={4}>
              Summary
            </Text>
            <Text textStyle="description">{project.summary}</Text>
          </Box>
          <Box
            width="100%"
            backgroundColor="secondary_blue"
            rounded="3xl"
            padding={8}
          >
            <Text textStyle="h2" pb={4}>
              Design Goals
            </Text>
            {project.designGoals.map((goal, index) => (
              <Text textStyle="description" key={index}>
                {index + 1}. {goal}
              </Text>
            ))}
          </Box>
        </HStack>
        <HStack width="100%" height="500px" alignItems="stretch" gap={10}>
          <Box
            width="50%"
            rounded="3xl"
            padding={8}
            backgroundColor="secondary_blue"
            height="100%"
          >
            <Text textStyle="h2" pb={4}>
              Core Mechanic
            </Text>
            <Text textStyle="description">{project.coreMechanic}</Text>
          </Box>
          <Box width={"50%"} height="100%" rounded="3xl" overflow={"hidden"}>
            <MediaCarousel items={project.coreMechanicsContent} />
          </Box>
        </HStack>
        <HStack width="100%" gap={10} alignItems="stretch">
          <Box
            width="100%"
            backgroundColor="secondary_blue"
            rounded="3xl"
            padding={8}
          >
            <Text textStyle="h2" pb={4}>
              What Went Well
            </Text>
            {project.whatWentWell.map((accomplishment, index) => (
              <Text textStyle="description" key={index}>
                {index + 1}. {accomplishment}
              </Text>
            ))}
          </Box>
          <Box
            width="100%"
            backgroundColor="secondary_blue"
            rounded="3xl"
            padding={8}
          >
            <Text textStyle="h2" pb={4}>
              Challenges
            </Text>
            {project.challenges.map((challenge, index) => (
              <Text textStyle="description" key={index}>
                {index + 1}. {challenge}
              </Text>
            ))}
          </Box>
        </HStack>
        <Box
          width="100%"
          backgroundColor="secondary_blue"
          rounded="3xl"
          padding={8}
        >
          <Text textStyle="h2" pb={4}>
            Lessons Learned
          </Text>
          {project.lessonsLearned.map((lesson, index) => (
            <Text textStyle="description" key={index}>
              {index + 1}. {lesson}
            </Text>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default GameDevProject;
