import {
  Box,
  VStack,
  HStack,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { gameDevProjects } from "@/content/projects/gameDevProjects";
import { MediaCarousel } from "@/components/MediaCarousel";
import { useEffect, ReactNode } from "react";
import { Tag } from "@/components/Tag";


// ---------------------------------------------------------
// Reusable section heading
// Creates the smaller "bubble" heading inside each card
// ---------------------------------------------------------
const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      display="inline-block"
      backgroundColor="bg_blue"
      rounded="full"
      px={{ base: 4, md: 5 }}
      py={2}
      mb={4}
    >
      <Text
        textStyle="h2"
        fontSize={{ base: "lg", md: "xl" }}
        color="black"
        margin={0}
      >
        {children}
      </Text>
    </Box>
  );
};


// ---------------------------------------------------------
// Small information cards
// Roles, Genres, Development Tools, Key Features
// ---------------------------------------------------------
const InfoCard = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <Box
      width="100%"
      height="100%"
      rounded="3xl"
      padding={{ base: 5, md: 7 }}
      backgroundColor="secondary_blue"
      transition="transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{
        transform: "translateY(-3px)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      }}
    >
      <SectionHeading>{title}</SectionHeading>

      <VStack align="stretch" gap={1}>
        {items.map((item, index) => (
          <Text
            textStyle="description"
            fontSize={{ base: "sm", md: "md" }}
            key={index}
          >
            {item}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};


// ---------------------------------------------------------
// Main content card
// Summary, Contributions, Challenges, etc.
// ---------------------------------------------------------
const ContentCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Box
      width="100%"
      height="100%"
      backgroundColor="secondary_blue"
      rounded="3xl"
      padding={{ base: 5, md: 8 }}
      transition="transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{
        transform: "translateY(-3px)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      }}
    >
      <SectionHeading>{title}</SectionHeading>

      {children}
    </Box>
  );
};


// ---------------------------------------------------------
// Cleaner numbered lists
// ---------------------------------------------------------
const NumberedItems = ({ items }: { items: string[] }) => {
  return (
    <VStack align="stretch" gap={4}>
      {items.map((item, index) => (
        <HStack
          key={index}
          align="flex-start"
          gap={3}
        >
          {/* Number Bubble */}
          <Flex
            flexShrink={0}
            width="30px"
            height="30px"
            rounded="full"
            backgroundColor="bg_blue"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontWeight="bold"
              fontSize="sm"
              lineHeight="1"
            >
              {index + 1}
            </Text>
          </Flex>

          {/* Text */}
          <Text
            textStyle="description"
            fontSize={{ base: "sm", md: "md" }}
            lineHeight="1.7"
          >
            {item}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
};


// ---------------------------------------------------------
// Game Development Project Page
// ---------------------------------------------------------
const GameDevProject = () => {
  const { projectName } = useParams();

  const project = projectName
    ? gameDevProjects[projectName]
    : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Safety check in case someone enters a bad project URL
  if (!project) {
    return (
      <Box
        minHeight="100vh"
        backgroundColor="bg_blue"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text textStyle="heading">
          Project not found.
        </Text>
      </Box>
    );
  }

  return (
    <Box
      py={{ base: 8, md: 16 }}
      backgroundColor="bg_blue"
      minHeight="100vh"
    >
      <VStack
        gap={{ base: 6, md: 10 }}
        mx="auto"
        width={{ base: "92%", md: "88%", xl: "80%" }}
        maxWidth="1500px"
      >

        {/* =====================================================
            PROJECT TITLE
        ===================================================== */}
        <Box
          backgroundColor="secondary_blue"
          width="100%"
          rounded="3xl"
          px={{ base: 4, md: 6 }}
          py={{ base: 5, md: 6 }}
        >
          <Text
            textStyle="heading"
            textAlign="center"
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            {project.projectName}
          </Text>
        </Box>


        {/* =====================================================
            PROJECT TAGS + EXTERNAL LINK
        ===================================================== */}
        <Flex
          width="100%"
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start", md: "center" }}
          gap={4}
        >
          <Flex
            flexWrap="wrap"
            gap={2}
          >
            {project.tags.map((tag: string, index: number) => (
              <Tag
                key={index}
                text={tag}
              />
            ))}
          </Flex>

          <Tag
            text={project.linkText}
            type="link"
            cursor="pointer"
            onClick={() =>
              window.open(
                project.link,
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
        </Flex>


        {/* =====================================================
            MAIN MEDIA + PROJECT INFORMATION
        ===================================================== */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          width="100%"
          gap={{ base: 6, md: 10 }}
          alignItems="stretch"
        >

          {/* Main Media Carousel */}
          <Box
            width="100%"
            height={{
              base: "280px",
              sm: "350px",
              md: "420px",
              lg: "500px",
            }}
            rounded="3xl"
            overflow="hidden"
          >
            <MediaCarousel items={project.mediaContent} />
          </Box>


          {/* Roles / Tools / Genres / Features */}
          <SimpleGrid
            columns={{ base: 1, sm: 2 }}
            gap={4}
            width="100%"
          >
            <InfoCard
              title={`Role${project.role.length > 1 ? "s" : ""}`}
              items={project.role}
            />

            <InfoCard
              title="Development Tools"
              items={project.developmentTools}
            />

            <InfoCard
              title="Genres"
              items={project.genre}
            />

            <InfoCard
              title="Key Features"
              items={project.keyFeatures}
            />
          </SimpleGrid>

        </SimpleGrid>


        {/* =====================================================
            SUMMARY + DESIGN GOALS
        ===================================================== */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          width="100%"
          gap={{ base: 6, md: 10 }}
          alignItems="stretch"
        >

          {/* Summary */}
          <ContentCard title="Summary">
            <Text
              textStyle="description"
              fontSize={{ base: "sm", md: "md" }}
              lineHeight="1.8"
            >
              {project.summary}
            </Text>
          </ContentCard>


          {/* Design Goals */}
          <ContentCard title="Design Goals">
            <NumberedItems items={project.designGoals} />
          </ContentCard>

        </SimpleGrid>


        {/* =====================================================
            CONTRIBUTIONS + MEDIA
        ===================================================== */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          width="100%"
          gap={{ base: 6, md: 10 }}
          alignItems="stretch"
        >

          {/* Contributions */}
          <ContentCard title="Contributions">
            <NumberedItems items={project.coreMechanic} />
          </ContentCard>


          {/* Contributions Media */}
          <Box
            width="100%"
            height={{
              base: "280px",
              sm: "350px",
              md: "420px",
              lg: "500px",
            }}
            rounded="3xl"
            overflow="hidden"
          >
            <MediaCarousel
              items={project.coreMechanicsContent}
            />
          </Box>

        </SimpleGrid>


        {/* =====================================================
            WHAT WENT WELL + CHALLENGES
        ===================================================== */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          width="100%"
          gap={{ base: 6, md: 10 }}
          alignItems="stretch"
        >

          {/* What Went Well */}
          <ContentCard title="What Went Well">
            <NumberedItems items={project.whatWentWell} />
          </ContentCard>


          {/* Challenges */}
          <ContentCard title="Challenges">
            <NumberedItems items={project.challenges} />
          </ContentCard>

        </SimpleGrid>


        {/* =====================================================
            LESSONS LEARNED
        ===================================================== */}
        <ContentCard title="Lessons Learned">
          <NumberedItems items={project.lessonsLearned} />
        </ContentCard>

      </VStack>
    </Box>
  );
};

export default GameDevProject;