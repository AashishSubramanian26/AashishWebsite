import {
  Button as DefaultChakraButton,
  ButtonProps as ChakraButtonProps,
  Text,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

interface ButtonProps extends ChakraButtonProps {
  text: string;
}

export const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <DefaultChakraButton
      bg={"tertiary_blue"}
      color={"white"}
      fontWeight="normal"
      border={"white 2px solid"}
      rounded="3xl"
      _hover={{ bg: "button_hover" }}
      _focus={{ bg: "button_hover" }}
      {...rest}
    >
      <Text paddingRight={2}>{text}</Text>
      <BsArrowRight size={20}/>
    </DefaultChakraButton>
  );
};
