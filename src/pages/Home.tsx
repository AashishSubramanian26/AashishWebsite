import {
  Box,
  Flex,
  HStack,
  Text,
  VStack,
  Image,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { homeContent } from "@/content/home";

const Home = () => {
  const navigate = useNavigate();
  const showTags = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });
  const horizontalStack = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box paddingY={16} backgroundColor="bg_blue">
      <VStack rowGap={10} justifySelf="center" width="80%">
        <VStack width="100%" gap={5}>
          <Box
            backgroundColor="secondary_blue"
            width="full"
            rounded="3xl"
            paddingX={4}
            paddingY={4}
          >
            <Text textStyle="heading" align="center">
              Aashish Subramanian
            </Text>
          </Box>
          <Text
            textStyle="body"
            color="secondary_blue"
            fontWeight={500}
            width="full"
            paddingLeft={2}
            align={!horizontalStack ? "center" : "left"}
          >
            {homeContent.role}
          </Text>
        </VStack>
        <Flex
          alignItems={"stretch"}
          height={horizontalStack ? "400px" : ""}
          gap={10}
          direction={horizontalStack ? "row" : "column"}
        >
          <VStack>
            <Image
              src="../src/images/aashish-subramanian.jpeg"
              alt="Aashish Subramanian"
              rounded="3xl"
              width="400px"
            />
            <HStack width={"100%"} paddingTop={2} justifyContent="center">
              <Tag
                text="resume"
                cursor="pointer"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "Aashish Subramanian Resume.pdf";
                  link.download = "Aashish_Subramanian_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              />
              <Tag
                text="github"
                cursor={"pointer"}
                onClick={() =>
                  window.open(
                    "https://github.com/AashishSubramanian26",
                    "_blank"
                  )
                }
              />
              <Tag
                text="linkedin"
                cursor={"pointer"}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/aashish-subramanian26/",
                    "_blank"
                  )
                }
              />
              <Tag
                text="contact me!"
                cursor={"pointer"}
                onClick={() =>
                  (window.location.href =
                    "mailto:aashish.subramanian26@gmail.com")
                }
              />
            </HStack>
          </VStack>
          <VStack
            height="100%"
            alignItems="start"
            backgroundColor="secondary_blue"
            rounded="3xl"
            padding={8}
            gap={10}
          >
            <Text textStyle="body" width="100%">
              {homeContent.description}
            </Text>
            <Spacer />
            <Button
              ml="auto"
              text="More about me"
              onClick={() => navigate("/about-me")}
            />
          </VStack>
        </Flex>
        <VStack
          backgroundColor="secondary_blue"
          rounded="3xl"
          padding={12}
          paddingBottom={6}
          gap={10}
          width="100%"
        >
          <Image
            src={homeContent.gameDevImgSrc}
            alt="Game dev picture"
            rounded="3xl"
            width="100%"
          />
          <HStack width="100%" justifyContent="start" gap="2">
            <Text textStyle="heading" paddingRight={4}>
              {homeContent.gameDevProject}
            </Text>
            {showTags &&
              homeContent.gameDevProjectTags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            <Button
              ml="auto"
              text="More game dev projects"
              onClick={() => navigate("/game-dev-projects")}
            />
          </HStack>
        </VStack>
        <VStack
          backgroundColor="secondary_blue"
          rounded="3xl"
          padding={12}
          paddingBottom={6}
          gap={10}
          width="100%"
        >
          <Image
            src={homeContent.softwareDevImgSrc}
            alt="Software dev picture"
            rounded="3xl"
            width="100%"
          />
          <HStack width="100%" justifyContent="start" gap="2">
            <Text textStyle="heading" paddingRight={4}>
              {homeContent.softwareDevProject}
            </Text>
            {showTags &&
              homeContent.softwareDevProjectTags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            <Button
              ml="auto"
              text="More software dev projects"
              onClick={() => navigate("/software-projects")}
            />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Home;
