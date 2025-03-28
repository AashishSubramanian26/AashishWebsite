import { extendTheme } from "@chakra-ui/react";
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

const theme = extendTheme({
  fonts: {
    heading: `'Poppins'`,
    body: `'Poppins'`,
    text: `'Poppins'`,
  },
  colors: {
    bg_blue: "#CFE9F3",
    secondary_blue: "#70ACD4",
    // tertiary_blue: "#66DBF4",
    tertiary_blue: "#3076B0",
    button_purple: "#6863FA",
    button_hover: "#16578C"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 600,
    black: 700,
  },
  textStyles: {
    heading: {
      fontWeight: "normal",
      fontSize: ["28px", "28px", "40px"],
      lineHeight: "50px",
      color: "#ffffff",
    },
    body: {
      fontWeight: "normal",
      fontSize: ["14px", "14px", "20px"],
      lineHeight: ["20px", "20px", "32px"],
      color: "#ffffff",
    },
    tag: {
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "18px",
      color: "white",
    },
    h2: {
      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "24px",
      color: "#ffffff",
    },
    description: {
      fontWeight: "400",
      fontSize: ["12px", "14px", "16px"],
      lineHeight: ["16px", "20px", "28px"],
      color: "#ffffff",
    },
    nav: {
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "22px",
      color: "secondary_blue",
    }
  },
});

export default theme;
