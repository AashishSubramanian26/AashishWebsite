import { Box, Text, HStack, VStack, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { aboutMeContent } from "@/content/aboutMe";

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box paddingY={16} backgroundColor="bg_blue">
      <VStack rowGap={10} justifySelf="center" width="80%">
        <Box
          backgroundColor="secondary_blue"
          width="100%"
          justifySelf="center"
          rounded="3xl"
          paddingX={4}
          paddingY={4}
        >
          <Text textStyle="heading" align="center">
            Hi, I'm Aashish!
          </Text>
        </Box>
        <HStack width="100%" alignItems="stretch" gap={10}>
          <VStack width="50%">
            <Box
              backgroundColor="tertiary_blue"
              width="100%"
              justifySelf="center"
              rounded="3xl"
              paddingX={4}
              paddingY={4}
              marginBottom={2}
            >
              <Text textStyle="heading" align="center">
                Lifelong Gamer
              </Text>
            </Box>
            <Image
              src="/about-me/AashishYoung.jpg"
              alt="Project 1 picture"
              rounded="3xl"
              width="510%"
            />
          </VStack>
          <Box
            backgroundColor="secondary_blue"
            width="50%"
            justifySelf="center"
            rounded="3xl"
            paddingX={4}
            paddingY={4}
          >
            <Text textStyle="body" align="left" padding={8}>
              {aboutMeContent.lifelongGamer}
            </Text>
          </Box>
        </HStack>
        <HStack width="100%" alignItems="stretch" gap={10}>
          <Box
            backgroundColor="secondary_blue"
            width="50%"
            justifySelf="center"
            rounded="3xl"
            paddingX={4}
            paddingY={4}
          >
            <Text textStyle="body" align="left" padding={8}>
              {aboutMeContent.visualMediaFan}
            </Text>
          </Box>
          <VStack width="50%">
            <Box
              backgroundColor="tertiary_blue"
              width="100%"
              justifySelf="center"
              rounded="3xl"
              paddingX={4}
              paddingY={4}
              marginBottom={2}
            >
              <Text textStyle="heading" align="center">
                Fan of Visual Media
              </Text>
            </Box>
            <Image
              src="/about-me/MixCollage-08-Jan-2026-05-39-PM-8123.jpg"
              alt="Project 1 picture"
              rounded="3xl"
              width="510%"
            />
          </VStack>
        </HStack>
        <HStack width="100%" alignItems="stretch" gap={10}>
          <VStack width="50%">
            <Box
              backgroundColor="tertiary_blue"
              width="100%"
              justifySelf="center"
              rounded="3xl"
              paddingX={4}
              paddingY={4}
              marginBottom={2}
            >
              <Text textStyle="heading" align="center">
                I Build Things
              </Text>
            </Box>
            <Image
              src="/about-me/Brunswick_Visit-69.jpg"
              alt="Project 1 picture"
              rounded="3xl"
              width="510%"
            />
          </VStack>
          <Box
            backgroundColor="secondary_blue"
            width="50%"
            justifySelf="center"
            rounded="3xl"
            paddingX={4}
            paddingY={4}
          >
            <Text textStyle="body" align="left" padding={8}>
              {aboutMeContent.notOnlyVG}
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AboutMe;
