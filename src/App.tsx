import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "@/pages/Home";
import AboutMe from "@/pages/AboutMe";
import Resume from "@/pages/Resume";
import GameDevResume from "@/pages/GameDevResume";
import GameDevProjects from "@/pages/GameDevProjects";
import SoftwareProjects from "@/pages/SoftwareProjects";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import { NavBar } from "@/components/NavBar";
import GameDevProject from "@/pages/GameDevProject";
import SoftwareProject from "@/pages/SoftwareProject";

const App = () => {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" Component={Home} />
            <Route path="/about-me" Component={AboutMe} />
            <Route path="/resume" Component={Resume} />
            <Route path="/game-dev-resume" Component={GameDevResume} />
            <Route path="/game-dev-projects" Component={GameDevProjects} />
            <Route path="/software-projects" Component={SoftwareProjects} />
            <Route
              path="/game-dev-projects/:projectName"
              Component={GameDevProject}
            />
            <Route 
              path="/software-projects/:projectName" 
              Component={SoftwareProject} 
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Box height="150px" background={"bg_blue"} />
        </Router>
      </ChakraProvider>
    </div>
  );
};

export default App;
