import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@mui/material/styles/styled";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledSpan = styled("span")`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 100)};
  color: #67159c !important;
  text-shadow: ${({ theme }) => theme.shadows[0]};
`;

const Tollbar = styled(Toolbar)`
  padding: 0 !important;
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  text-decoration: none;

  &.active {
    color: white;
  }

  &.inactive {
    color: red;
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
        variant="h3"
        fontSize={{ xs: "1.3rem", sm: "2rem" }}
        sx={{ my: 2 }}
      >
        Gleydson <StyledSpan>Lucena</StyledSpan>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
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
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "block", sm: "block" },
                textAlign: { xs: "center", sm: "left" },
                fontSize: { xs: "1.3rem", sm: "2rem" },
                fontWeight: "400",
                letterSpacing: "0.1px",
                padding: "1.3rem",
              }}
            >
              <StyledSpan fontWeight="600">{"<"}</StyledSpan> Gleydson{" "}
              <StyledSpan>Lucena</StyledSpan> {">"}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <List sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
                {navItems.map((item) => (
                  <StyledNavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                    key={item}
                  >
                    {item}
                  </StyledNavLink>
                ))}
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
