import { useState } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@mui/material/styles/styled";
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  keyframes,
  List,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const StyledSpan = styled("span")`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 100)};
  color: #67159c !important;
  text-shadow: ${({ theme }) => theme.shadows[0]};
`;

const Tollbar = styled(Toolbar)`
  padding: 0 !important;
`;

const HoverAniamtion = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  padding: 1rem 0.5rem;
  margin-right: 2rem;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  transition: all 300ms ease;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    text-shadow: ${({ theme }) => theme.shadows[3]};
  }

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0.5rem;
    width: 100%;
    height: 0.3rem;
    border-radius: 1rem;
    background: linear-gradient(to right, #67159c, #1e1e26);
    animation: ${HoverAniamtion} 300ms ease;
  }

  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
`;

const ContactButton = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: #67159c;
  color: white;
  padding: 0 2rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 300ms ease;

  &:hover {
    background: #67159c;
    text-shadow: ${({ theme }) => theme.shadows[2]};
  }
`;

const drawerWidth = 240;
const navItems = ["Inicio", "Sobre", "Projetos", "Contato"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h2"
        fontSize={{ xs: "1.3rem", sm: "2rem" }}
        sx={{ my: 2 }}
      >
        Gleydson <StyledSpan>Lucena</StyledSpan>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <StyledLink to={item.toLowerCase()} smooth={true} key={item}>
            <ListItemText
              onClick={handleDrawerToggle}
              primary={item}
              sx={{
                color: "black",
              }}
            />
          </StyledLink>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component="nav"
        sx={{ padding: "0", backgroundColor: (theme) => theme.palette.bg.main }}
      >
        <Container maxWidth="xl">
          <Tollbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h1"
              component={Link}
              to="inicio"
              smooth={true}
              sx={{
                cursor: "pointer",
                flexGrow: 1,
                display: { xs: "block", sm: "block" },
                textAlign: { xs: "center", sm: "left" },
                fontSize: { xs: "1.3rem", sm: "2rem" },
                fontWeight: "400",
                letterSpacing: "0.1px",
                padding: "1.5rem 0",
                textShadow: (theme) => theme.shadows[0],
              }}
            >
              <StyledSpan fontWeight="600">{"<"}</StyledSpan> Gleydson{" "}
              <StyledSpan>Lucena</StyledSpan> {">"}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <List sx={{ display: "flex", justifyContent: "center" }}>
                {navItems.map((item) =>
                  item === "Contato" ? (
                    <ContactButton
                      key={item}
                      to={item.toLowerCase()}
                      smooth={true}
                      variant="contained"
                    >
                      {item}
                    </ContactButton>
                  ) : (
                    <StyledLink
                      to={item.toLowerCase()}
                      smooth={true}
                      key={item}
                    >
                      {item}
                    </StyledLink>
                  )
                )}
              </List>
            </Box>
          </Tollbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
