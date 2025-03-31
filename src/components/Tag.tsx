import {
  Tag as DefaultChakraTag,
  Text,
  TagProps as ChakraTagProps,
} from "@chakra-ui/react";
import { BsLink } from "react-icons/bs";

interface TagProps extends ChakraTagProps {
  text: string;
  type?: string;
}

export const Tag = ({ text, type, ...rest }: TagProps) => {
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
      <Text textStyle="tag" isTruncated display={"inline-flex"}>{text}{type === "link" && <BsLink size={20} style={{marginTop:"-1", marginLeft:"6"}} />}</Text>
    </DefaultChakraTag>
  );
};
