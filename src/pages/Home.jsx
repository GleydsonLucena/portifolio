import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import { Container } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "##67159C",
      contrastText: "#fff",
    },
    secondary: {
      main: "##07D962",
      contrastText: "#fff",
    },
    tertiary: {
      main: "#E82D92",
      contrastText: "#fff",
    },
    bg: {
      main: "#1E1E26",
      dark: "#19181F",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Saira",
  },
  shape: {
    borderRadius: 6,
  },
  shadows: [
    "0 0 20px #66159cbc", // span
    "0 0 20px #e7e7e771", // 1
    "0 0 20px #e7e7e7df", // 2
    "0 0 10px #e7e7e739", // 3
    "none", // 4
    "none", // 5
    "none", // 6
    "none", // 7
    "none", // 8
    "none", // 9
    "none", // 10
    "none", // 11
    "none", // 12
    "none", // 13
    "none", // 14
    "none", // 15
    "0px 6px 10px rgba(0,0,0,0.15), 0px 1px 5px rgba(0,0,0,0.1)", // 16
  ],
});

const StyledHome = styled("main")`
  background-color: ${({ theme }) => theme.palette.bg.main};
  padding: 0;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <StyledHome>
        <Navbar />
        <Container maxWidth="xl">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </Container>
      </StyledHome>
    </ThemeProvider>
  );
};

export default Home;
