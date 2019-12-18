import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {
  StyledMenuBarContainer,
  StyledMenuBarWrapper,
  StyledLink,
} from './menubar.styles';

class SubmenuBar extends React.Component {
  render() {
    const {
      links,
    } = this.props;

    return (
      <StyledMenuBarContainer className="submenu-bar">
        <StyledMenuBarWrapper>
          <Grid
            container
            justify="center"
          >
            {links.map(link => (
              <Grid
                item
                key={link.to}
              >
                <NavLink
                  to={link.to}
                  className="submenu-bar-link"
                >
                  <StyledLink>
                    {link.label}
                  </StyledLink>
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </StyledMenuBarWrapper>
      </StyledMenuBarContainer>
    );
  }
}

export default SubmenuBar;
