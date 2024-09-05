import { Grid2, keyframes, Typography } from "@mui/material";
import SectionsContainer from "../layouts/SectionsContainer";
import styled from "@mui/material/styles/styled";

import reactSVG from "../assets/react.svg";
import javascriptSVG from "../assets/javascript.svg";

const StyledTitleContent = styled("h2")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.primary.contrastText,
  textShadow: theme.shadows[0],

  [theme.breakpoints.up("xs")]: {
    fontSize: "1.3rem",
  },

  ".arrow": {
    fontWeight: 600,
    color: theme.palette.primary.contrastText,
    textShadow: theme.shadows[0],
  },

  ".dot": {
    color: theme.palette.primary.contrastText,
    fontWeight: 600,
    textShadow: theme.shadows[0],
  },
}));

const LineAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const StyleTitle = styled("h2")(({ theme }) => ({
  position: "relative",
  width: "max-content",
  color: theme.palette.bg.contrastText,

  [theme.breakpoints.up("xs")]: {
    width: "100%",
    fontSize: "2.5rem",
  },

  span: {
    color: theme.palette.primary.main,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: "-0.5rem",
    width: "100%",
    height: "0.4rem",
    borderRadius: "1rem",
    background: "linear-gradient(to right, #67159c, #1e1e26 100%)",
    animation: `${LineAnimation} 1200ms alternate infinite`,
  },
}));

const RotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledImg = styled("img")(() => ({
  "&#react": {
    filter: "drop-shadow(0 0 20px #66159c92)",
    animation: `${RotateAnimation} 15s linear infinite`,
  },

  "&#js": {
    position: "absolute",
    bottom: "50%",
    left: "50%",
    transform: "translate(-50%, 50%)",
    width: "13%",

    filter: "drop-shadow(0 0 20px #e7e7e771)",
  },
}));

const Hero = () => {
  return (
    <SectionsContainer id="inicio">
      <Grid2
        container
        spacing={1}
        height="80vh"
        direction={{ xs: "column", md: "row" }}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid2
          sx={{
            maxHeight: { xs: "35vh", md: "100vh" },
            height: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <Typography
            variant="h5"
            component={StyledTitleContent}
            gutterBottom
            sx={{
              fontWeight: 100,
              margin: "0",
              color: (theme) => theme.palette.primary.main,
            }}
          >
            <span className="arrow">{"< "}</span>
            Desenvolvedor front end
            <span className="dot">.</span>
            <span className="arrow">{" / >"}</span>
          </Typography>
          <Typography
            variant="h2"
            component={StyleTitle}
            fontWeight={{ xs: 500, md: 600 }}
            sx={{
              mb: 3,
            }}
          >
            Gleydson Lucena<span>.</span>
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            sx={{
              color: (theme) => theme.palette.bg.contrastText,
              fontWeight: 300,
            }}
          >
            Olá, bem vindo ao meu portifólio, sou desenvolvedor front end,
            desenvolvo interfaces elegantes garantindo a melhor experiência do
            ususário
          </Typography>
        </Grid2>

        <Grid2
          maxHeight={{ xs: "43vh", md: "100vh" }}
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <StyledImg id="react" src={reactSVG} alt="logo react" width="100%" />
          <StyledImg id="js" src={javascriptSVG} alt="logo javascript" />
        </Grid2>
      </Grid2>
    </SectionsContainer>
  );
};

export default Hero;
