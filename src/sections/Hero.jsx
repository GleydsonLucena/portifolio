import { Box, keyframes, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";
import SectionsContainer from "../layouts/SectionsContainer";
import styled from "@mui/material/styles/styled";

const LineAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const StyledContentHero = styled("h2")`
  position: relative;
  font-size: 6rem !important;
  font-weight: 500 !important;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  text-shadow: ${({ theme }) => theme.shadows[3]};
  width: max-content;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 100%;
    height: 0.4rem;
    border-radius: 1rem;
    background: linear-gradient(to right, #67159c, #1e1e26 100%);
    animation: ${LineAnimation} 1200ms alternate infinite;
  }

  span {
    display: block;
    font-weight: 100;
    font-size: 2rem;
    color: ${({ theme }) => theme.palette.primary.main};
    text-shadow: ${({ theme }) => theme.shadows[0]};

    &.arrow {
      display: inline;
      color: ${({ theme }) => theme.palette.primary.contrastText} !important;
      font-size: 2rem !important;
      width: max-content !important;
    }

    &:last-child {
      display: inline;
      height: max-content;
      font-size: 6rem;
      color: ${({ theme }) => theme.palette.primary.main};
      text-shadow: ${({ theme }) => theme.shadows[5]};
    }
  }
`;

const StyledParag = styled("p")`
  font-size: 1.3rem;
  margin-top: 3rem !important;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  text-shadow: ${({ theme }) => theme.shadows[3]};

  span {
    color: ${({ theme }) => theme.palette.primary.main};
    width: 8rem;
  }
`;

const Hero = () => {
  return (
    <SectionsContainer title="" id="inicio">
      <Box
        component="div"
        maxWidth="xl"
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid2
          container
          spacing={2}
          sx={{
            width: "100% ",
            justifyContent: "space-between",
          }}
        >
          <Grid2 item size={6}>
            <Typography variant="h2" component={StyledContentHero}>
              <span>
                <span className="arrow">{"< "}</span>Desenvolvedor front-end
                <span className="arrow">{" / >"}</span>
              </span>
              Gleydson Lucena<span>.</span>
            </Typography>
            <Typography variant="body1" component={StyledParag}>
              Olá, bem vindo ao meu portifólio, meu nome é Gleydson,sou
              desenvolvedor front end. Meu primeiro contato com programação foi
              em 2021, onde realizei as primeiras linhas de código, desde então
              sigo aprimorando cada vez mais meus conhecimentos e habilidades
              <span>.</span>
            </Typography>
          </Grid2>
          <Grid2 item size={5}>
            Teste Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Error numquam, ullam autem quae minima accusamus dicta est ratione
            nesciunt obcaecati odit sit beatae ea nostrum magni, ex fuga harum.{" "}
          </Grid2>
        </Grid2>
      </Box>
    </SectionsContainer>
  );
};

export default Hero;
