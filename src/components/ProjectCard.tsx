import {
  HStack,
  VStack,
  Box,
  Image,
  Text,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Tag } from "@/components/Tag";

interface ProjectCardProps {
  projectName: string;
  role: string;
  description: string;
  tags: string[];
  imgSrc: string;
  onClick?: () => void;
}

export const ProjectCard = ({
  projectName,
  role,
  description,
  tags,
  imgSrc,
  onClick,
}: ProjectCardProps) => {
  const showTags = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
    xl: true,
  });

  return (
    <HStack
      backgroundColor={"secondary_blue"}
      width={"100%"}
      rounded="3xl"
      padding={4}
      onClick={onClick}
      cursor={"pointer"}
    >
      <Box w="40%" h="250px" rounded="3xl" overflow="hidden" minW="200px">
        <Image
          w="full"
          h="250px"
          src={imgSrc}
          alt={projectName}
          objectFit="cover"
        />
      </Box>
      <VStack
        align={"left"}
        height="full"
        padding={4}
        paddingLeft={2}
        paddingBottom={2}
      >
        <Text textStyle="h2">{projectName}</Text>
        <Text textStyle="description">{role}</Text>
        <Text textStyle="description">{description}</Text>
        <Spacer />
        {showTags && (
          <HStack>
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} alignSelf="flex-start" />
            ))}
          </HStack>
        )}
      </VStack>
    </HStack>
  );
};
