import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
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

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <h1>APP</h1>
      </Container>
    </ThemeProvider>
  );
}
