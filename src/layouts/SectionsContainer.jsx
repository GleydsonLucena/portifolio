import PropTypes from "prop-types";
import styled from "@mui/material/styles/styled";
import { Typography } from "@mui/material";

const StyledSectionsContainer = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5rem;
  min-height: 100vh;
  min-width: 100%;
`;

const SectionsContainer = ({ children, title, id }) => {
  return (
    <StyledSectionsContainer id={id}>
      <Typography variant="h2" component="h2" gutterBottom>
        {title}
      </Typography>
      {children}
    </StyledSectionsContainer>
  );
};

SectionsContainer.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  id: PropTypes.string,
};

export default SectionsContainer;
