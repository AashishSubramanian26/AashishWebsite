import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Link,
  Stack,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";
import { gameDevProjects } from "@/content/projects/gameDevProjects";
import { softwareProjects } from "@/content/projects/softwareProjects";

const sections = [
  {
    title: "Game Development",
    path: "game-dev-projects",
    projects: gameDevProjects,
  },
  {
    title: "Software Engineering",
    path: "software-projects",
    projects: softwareProjects,
  },
];

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jumpToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    section?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <Box
      as="main"
      maxW="1200px"
      mx="auto"
      px={{ base: 5, md: 8 }}
      pt={{ base: 6, md: 8 }}
      pb={24}
      color="#18364b"
    >
      {/* Small introduction above the projects */}
      <Flex
        as="section"
        aria-label="About Aashish"
        direction={{ base: "column", sm: "row" }}
        align="center"
        gap={{ base: 4, md: 6 }}
        textAlign={{ base: "center", sm: "left" }}
        mb={10}
      >
        <Image
          src="/aashish-subramanian.jpeg"
          alt="Aashish Subramanian"
          boxSize={{ base: "96px", md: "120px" }}
          borderRadius="full"
          objectFit="cover"
          flexShrink={0}
        />

        <Box>
          <Heading as="h1" size="lg" mb={2}>
            Hi, I’m Aashish!
          </Heading>

          <Text
            fontSize={{ base: "sm", md: "md" }}
            maxW="700px"
            mb={4}
          >
            I build games and interactive experiences, with interests in
            programming, UI/UX, and design. Explore my work below.
          </Text>

          <Flex
            gap={3}
            wrap="wrap"
            justify={{ base: "center", sm: "flex-start" }}
          >
            <Button
              as="a"
              href="https://www.linkedin.com/in/aashish-subramanian26/"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              colorScheme="blue"
              variant="outline"
            >
              LinkedIn ↗
            </Button>

            <Button
              as="a"
              href="https://github.com/AashishSubramanian26"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              colorScheme="blue"
              variant="outline"
            >
              GitHub ↗
            </Button>

              <Button
                as="a"
                href="mailto:aashish.subramanian26@gmail.com"
                size="sm"
                colorScheme="blue"
                variant="outline"
              >
                Email me ✉
              </Button>

            <Button
              as={RouterLink}
              to="/about-me"
              size="sm"
              colorScheme="blue"
              variant="ghost"
            >
              About me →
            </Button>
          </Flex>
        </Box>
      </Flex>

      {/* Projects */}
      <Heading as="h2" size="lg" mb={3}>
        Projects
      </Heading>

      <Text fontSize="md" mb={8}>
        Explore my work in game development and software engineering.
      </Text>

      <Stack spacing={12}>
        {sections.map(({ title, path, projects }) => (
          <Box as="section" key={path} aria-labelledby={path}>
            <Heading
              as="h3"
              id={path}
              fontSize={{ base: "24px", md: "30px" }}
              fontWeight="700"
              mb={6}
              scrollMarginTop="24px"
            >
              {title}
            </Heading>

            <SimpleGrid
              columns={{ base: 1, md: 2, xl: 3 }}
              spacing={6}
            >
              {Object.entries(projects).map(([alias, project]) => (
                <Link
                  as={RouterLink}
                  to={`/${path}/${alias}`}
                  key={alias}
                  display="flex"
                  flexDirection="column"
                  bg="white"
                  borderRadius="xl"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="blue.100"
                  _hover={{
                    textDecoration: "none",
                    boxShadow: "md",
                  }}
                  _focusVisible={{
                    outline: "3px solid",
                    outlineColor: "blue.600",
                    outlineOffset: "3px",
                  }}
                >
                  <Image
                    src={project.cardImgSrc}
                    alt=""
                    loading="lazy"
                    w="full"
                    h="200px"
                    objectFit="cover"
                  />

                  <Stack p={5} spacing={3} flex="1">
                    <Heading as="h4" size="md">
                      {project.projectName}
                    </Heading>

                    <Text fontSize="sm" fontWeight="600">
                      {project.role.join(" · ")}
                    </Text>

                    <Text fontSize="sm" noOfLines={4}>
                      {project.description}
                    </Text>

                    <Text fontSize="xs" color="gray.600">
                      {project.tags.join(" · ")}
                    </Text>

                    <Text
                      fontSize="sm"
                      fontWeight="600"
                      color="blue.700"
                      pt={2}
                      mt="auto"
                    >
                      View project →
                    </Text>
                  </Stack>
                </Link>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </Stack>

      {/* Floating shortcuts to each project section */}
      <Stack
        as="nav"
        aria-label="Jump to project section"
        position="fixed"
        right={{ base: 3, md: 5 }}
        bottom={{ base: 4, md: "auto" }}
        top={{ base: "auto", md: "50%" }}
        transform={{
          base: "none",
          md: "translateY(-50%)",
        }}
        direction={{ base: "row", md: "column" }}
        spacing={2}
        p={2}
        bg="white"
        border="1px solid"
        borderColor="blue.100"
        borderRadius="xl"
        boxShadow="lg"
        zIndex={20}
      >
        <Button
          size="sm"
          colorScheme="blue"
          onClick={() => jumpToSection("game-dev-projects")}
          aria-label="Jump to Game Development projects"
        >
          ↑ Games
        </Button>

        <Button
          size="sm"
          colorScheme="blue"
          variant="outline"
          onClick={() => jumpToSection("software-projects")}
          aria-label="Jump to Software Engineering projects"
        >
          ↓ Software
        </Button>
      </Stack>
    </Box>
  );
}