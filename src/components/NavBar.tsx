import { Box, Flex, HStack, Link, Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

export const NavBar = () => {
  const { pathname } = useLocation();
  const isProject = pathname.startsWith("/game-dev-projects/") || pathname.startsWith("/software-projects/");
  const isResume = pathname === "/resume" || pathname === "/game-dev-resume";

  return (
    <Box as="header" backgroundColor="bg_blue" color="#18364b">
      <Flex maxW="1200px" mx="auto" px={{ base: 5, md: 8 }} py={6} gap={5}
        direction={{ base: "column", sm: "row" }} justify="space-between" align={{ base: "flex-start", sm: "center" }}>
        <Link as={RouterLink} to="/" fontWeight="700" fontSize="lg">Aashish Subramanian</Link>
        <HStack as="nav" aria-label="Main navigation" spacing={6} fontWeight="600">
          <Link as={RouterLink} to="/" aria-current={pathname === "/" ? "page" : undefined}
            textDecoration={pathname === "/" || isProject ? "underline" : "none"} textUnderlineOffset="6px">Projects</Link>
          <Link as={RouterLink} to="/about-me" aria-current={pathname === "/about-me" ? "page" : undefined}
            textDecoration={pathname === "/about-me" ? "underline" : "none"} textUnderlineOffset="6px">About</Link>
          <Menu>
            <MenuButton as={Button} variant="link" color="inherit" fontSize="inherit"
              textDecoration={isResume ? "underline" : "none"} textUnderlineOffset="6px">Résumés ▾</MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/game-dev-resume">Game Development</MenuItem>
              <MenuItem as={RouterLink} to="/resume">Software Engineering</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
      {isProject && (
        <Box maxW="1200px" mx="auto" px={{ base: 5, md: 8 }}>
          <Link as={RouterLink} to="/">← Back to projects</Link>
        </Box>
      )}
    </Box>
  );
};
