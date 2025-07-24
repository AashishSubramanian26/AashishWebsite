import {
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box backgroundColor="bg_blue">
      <HStack
        gap="25px"
        width="80%"
        justifyContent={
          location.pathname.startsWith("/game-dev-projects/")
            ? "space-between"
            : "flex-end"
        }
        justifySelf={"center"}
        pt={16}
      >
        {location.pathname.startsWith("/game-dev-projects/") && (
          <BsArrowLeft
            size={30}
            color={"#70ACD4"}
            strokeWidth={"0.5px"}
            onClick={() => navigate(-1)}
            cursor={"pointer"}
          />
        )}
        <HStack gap="25px" justifyContent="flex-end">
          <Text
            _hover={{
              textDecoration: "underline",
              textUnderlineOffset: "10px",
              textDecorationThickness: "2px",
            }}
            cursor="pointer"
            onClick={() => navigate("/home")}
            textDecoration={
              location.pathname === "/home" ? "underline" : "none"
            }
            textUnderlineOffset="10px"
            textDecorationThickness="2px"
            textStyle="nav"
          >
            Home
          </Text>
          <Menu>
            <MenuButton
              as={Text}
              _hover={{
                textDecoration: "underline",
                textUnderlineOffset: "10px",
                textDecorationThickness: "2px",
              }}
              cursor="pointer"
              textDecoration={
                location.pathname === "/game-dev-projects" ||
                location.pathname === "/software-projects"
                  ? "underline"
                  : "none"
              }
              textUnderlineOffset="10px"
              textDecorationThickness="2px"
              textStyle="nav"
            >
              Projects
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => navigate("/game-dev-projects")}>
                Game Development
              </MenuItem>
              <MenuItem onClick={() => navigate("/software-projects")}>
                Software Engineering
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Text}
              _hover={{
                textDecoration: "underline",
                textUnderlineOffset: "10px",
                textDecorationThickness: "2px",
              }}
              cursor="pointer"
              textDecoration={
                location.pathname === "/game-dev-resume" ||
                location.pathname === "/resume"
                  ? "underline"
                  : "none"
              }
              textUnderlineOffset="10px"
              textDecorationThickness="2px"
              textStyle="nav"
            >
              Resumes
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => navigate("/game-dev-resume")}>
                Game Development
              </MenuItem>
              <MenuItem onClick={() => navigate("/resume")}>
                Software Engineering
              </MenuItem>
            </MenuList>
          </Menu>
          <Text
            _hover={{
              textDecoration: "underline",
              textUnderlineOffset: "10px",
              textDecorationThickness: "2px",
            }}
            cursor="pointer"
            onClick={() => navigate("/about-me")}
            textDecoration={
              location.pathname === "/about-me" ? "underline" : "none"
            }
            textUnderlineOffset="10px"
            textDecorationThickness="2px"
            textStyle="nav"
          >
            About Me
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};
