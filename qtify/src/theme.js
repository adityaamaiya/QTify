import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif', // Set Poppins as the default font
  },
  palette: {
    primary: {
      main: '#34C94B',  // Green color
    },
    background: {
      default: '#121212', // black as the default background
    },
    text: {
      primary: '#ffffff', // white text color
    },
  },
});

export default theme;