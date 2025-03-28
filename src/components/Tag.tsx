import {
  Tag as DefaultChakraTag,
  Text,
  TagProps as ChakraTagProps,
} from "@chakra-ui/react";

interface TagProps extends ChakraTagProps {
  text: string;
}

export const Tag = ({ text, ...rest }: TagProps) => {
  return (
    <DefaultChakraTag
      backgroundColor={"tertiary_blue"}
      rounded="full"
      paddingX={3}
      paddingY={1}
      display="inline"
      whiteSpace="nowrap"
      cursor="default"
      {...rest}
    >
      <Text textStyle="tag">{text}</Text>
    </DefaultChakraTag>
  );
};
