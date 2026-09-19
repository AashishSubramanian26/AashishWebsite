import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Projects from "@/pages/Projects";
import AboutMe from "@/pages/AboutMe";
import Resume from "@/pages/Resume";
import GameDevResume from "@/pages/GameDevResume";
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
            <Route path="/" Component={Projects} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/projects" element={<Navigate to="/" replace />} />
            <Route path="/about-me" Component={AboutMe} />
            <Route path="/resume" Component={Resume} />
            <Route path="/game-dev-resume" Component={GameDevResume} />
            <Route path="/game-dev-projects" element={<Navigate to="/" replace />} />
            <Route path="/software-projects" element={<Navigate to="/" replace />} />
            <Route
              path="/game-dev-projects/:projectName"
              Component={GameDevProject}
            />
            <Route 
              path="/software-projects/:projectName" 
              Component={SoftwareProject} 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Box height="150px" background={"bg_blue"} />
        </Router>
      </ChakraProvider>
    </div>
  );
};

export default App;