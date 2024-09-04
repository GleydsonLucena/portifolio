import { Container } from "@mui/material";
import styled from "@mui/material/styles/styled";

const StyledHero = styled(Container)`
  background-color: ${({ theme }) => theme.palette.bg.main};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hero = () => {
  return (
    <StyledHero maxWidth="xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam
      consequatur deleniti animi officia, voluptates perspiciatis facilis,
      inventore aliquam impedit reprehenderit error, a saepe iste ipsam fuga!
      Expedita, fugiat repellat?Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Sunt modi, nobis omnis nisi animi expedita quia dolorum
      fugiat molestiae est corporis beatae laborum quas doloremque adipisci
      minus, obcaecati commodi exercitationem. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Exercitationem, illum? Veritatis porro
      voluptas natus assumenda perspiciatis minus corrupti soluta architecto.
      Ipsam commodi iste possimus porro fugit similique quod ab soluta? Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium
      nihil aliquid dolore odio ipsam a ab cum, eius consequatur repellendus
      totam, fugit in eum amet natus! Accusantium, dicta omnis? Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Officia at debitis doloribus
      quod, laudantium nulla dolores delectus obcaecati est rem aut ad, quos
      exercitationem quia tempore ut molestias sit. Nulla.
    </StyledHero>
  );
};

export default Hero;
