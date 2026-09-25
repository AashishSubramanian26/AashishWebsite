import {
  Box,
  Text,
  VStack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { aboutMeContent } from "@/content/aboutMe";

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      py={{ base: 8, md: 16 }}
      backgroundColor="bg_blue"
      minHeight="100vh"
    >
      <VStack
        gap={{ base: 8, md: 10 }}
        width={{ base: "92%", md: "88%", xl: "80%" }}
        maxWidth="1500px"
        mx="auto"
      >

        {/* =====================================================
            PAGE HEADER
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
            Hi, I'm Aashish!
          </Text>
        </Box>


        {/* =====================================================
            LIFELONG GAMER
        ===================================================== */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          width="100%"
          gap={{ base: 5, md: 10 }}
          alignItems="stretch"
        >
          {/* Image Side */}
          <VStack
            width="100%"
            gap={3}
          >
            <Box
              backgroundColor="tertiary_blue"
              width="100%"
              rounded="3xl"
              px={{ base: 4, md: 6 }}
              py={{ base: 4, md: 5 }}
            >
              <Text
                textStyle="heading"
                textAlign="center"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Lifelong Gamer
              </Text>
            </Box>

            <Image
              src="/about-me/AashishYoung.jpg"
              alt="Aashish playing games when he was younger"
              rounded="3xl"
              width="100%"
              height={{
                base: "300px",
                sm: "400px",
                md: "500px",
              }}
              objectFit="cover"
            />
          </VStack>


          {/* Text Side */}
          <Box
            backgroundColor="secondary_blue"
            width="100%"
            rounded="3xl"
            p={{ base: 5, md: 8 }}
            display="flex"
            alignItems="center"
          >
            <Text
              textStyle="body"
              textAlign="left"
              fontSize={{ base: "sm", md: "md" }}
              lineHeight={{ base: "1.7", md: "1.8" }}
            >
              {aboutMeContent.lifelongGamer}
            </Text>
          </Box>
        </SimpleGrid>


        {/* =====================================================
            FAN OF VISUAL MEDIA
        ===================================================== */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          width="100%"
          gap={{ base: 5, md: 10 }}
          alignItems="stretch"
        >

          {/* Text Side - Desktop */}
          <Box
            backgroundColor="secondary_blue"
            width="100%"
            rounded="3xl"
            p={{ base: 5, md: 8 }}
            display={{ base: "none", lg: "flex" }}
            alignItems="center"
          >
            <Text
              textStyle="body"
              textAlign="left"
              fontSize={{ base: "sm", md: "md" }}
              lineHeight="1.8"
            >
              {aboutMeContent.visualMediaFan}
            </Text>
          </Box>


          {/* Image Side */}
          <VStack
            width="100%"
            gap={3}
          >
            <Box
              backgroundColor="tertiary_blue"
              width="100%"
              rounded="3xl"
              px={{ base: 4, md: 6 }}
              py={{ base: 4, md: 5 }}
            >
              <Text
                textStyle="heading"
                textAlign="center"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Fan of Visual Media
              </Text>
            </Box>

            <Image
              src="/about-me/MixCollage-08-Jan-2026-05-39-PM-8123.jpg"
              alt="A collage representing Aashish's interest in visual media"
              rounded="3xl"
              width="100%"
              height={{
                base: "300px",
                sm: "400px",
                md: "500px",
              }}
              objectFit="cover"
            />
          </VStack>


          {/* Text Side - Mobile */}
          <Box
            backgroundColor="secondary_blue"
            width="100%"
            rounded="3xl"
            p={5}
            display={{ base: "block", lg: "none" }}
          >
            <Text
              textStyle="body"
              textAlign="left"
              fontSize="sm"
              lineHeight="1.7"
            >
              {aboutMeContent.visualMediaFan}
            </Text>
          </Box>
        </SimpleGrid>


        {/* =====================================================
            I BUILD THINGS
        ===================================================== */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          width="100%"
          gap={{ base: 5, md: 10 }}
          alignItems="stretch"
        >

          {/* Image Side */}
          <VStack
            width="100%"
            gap={3}
          >
            <Box
              backgroundColor="tertiary_blue"
              width="100%"
              rounded="3xl"
              px={{ base: 4, md: 6 }}
              py={{ base: 4, md: 5 }}
            >
              <Text
                textStyle="heading"
                textAlign="center"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                I Build Things
              </Text>
            </Box>

            <Image
              src="/about-me/Brunswick_Visit-69.jpg"
              alt="Aashish working on a project"
              rounded="3xl"
              width="100%"
              height={{
                base: "300px",
                sm: "400px",
                md: "500px",
              }}
              objectFit="cover"
            />
          </VStack>


          {/* Text Side */}
          <Box
            backgroundColor="secondary_blue"
            width="100%"
            rounded="3xl"
            p={{ base: 5, md: 8 }}
            display="flex"
            alignItems="center"
          >
            <Text
              textStyle="body"
              textAlign="left"
              fontSize={{ base: "sm", md: "md" }}
              lineHeight={{ base: "1.7", md: "1.8" }}
            >
              {aboutMeContent.notOnlyVG}
            </Text>
          </Box>
        </SimpleGrid>

      </VStack>
    </Box>
  );
};

export default AboutMe;