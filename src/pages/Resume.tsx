import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Box paddingY={16} backgroundColor="bg_blue">
      <Box
        backgroundColor="secondary_blue"
        width="80%"
        justifySelf="center"
        rounded="3xl"
        paddingX={4}
        paddingY={4}
      >
        <Text textStyle="heading" align="center">
         Software Engineering Resume
        </Text>
      </Box>
      <Box justifySelf="center" paddingTop={10} width="80%">
        <object
          data="Aashish Subramanian_Resume - SWE.pdf"
          type="application/pdf" 
          width="100%"
          height="1200px"
        >
          Sorry, your browser doesn't support PDF preview.
        </object>
      </Box>
    </Box>
  );
};

export default Resume;
