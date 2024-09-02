import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./Home";

const theme = createTheme({
  palette: {
    primary: {
      main: "#67159C",
    },
    secondary: {
      main: "#07D962",
    },
    bg: {
      main: "#1E1E26",
      dark: "#19181F",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </StrictMode>
);
