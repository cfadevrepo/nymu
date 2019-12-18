import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  openSideMenu,
} from '../actions/sidemenuActions';

import AssetStore from '../../lib/AssetStore';

class LogoBar extends React.PureComponent {
  render() {
    const {
      isSideMenuOpened,
      onOpenSideMenu,
    } = this.props;

    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        className="logo-bar"
      >
			<a name='top'></a>
        {!isSideMenuOpened ? (
          <Grid
            item
            xs={2}
          >
            <span className="menu-button">
              <IconButton
                color="inherit"
                aria-label="Open Menu"
                onClick={onOpenSideMenu}
              >
                <MenuIcon
                  fontSize="large"
                />
              </IconButton>
            </span>
          </Grid>
        ) : null}
        <Grid
          item
          xs={10}
          className="logo-bar-content"
        >
          <Grid
            container
            alignItems="center"
            justify="center"
          >
            <Grid
              item
              xs={12}
              md={4}
              className="language-flagship-logo"
            >
              <a href="https://thelanguageflagship.org/"  target="_blank" >
                <img
                  alt="Chinese Flagship"
                  src={AssetStore.get('assets/images/language-flagship-logo.png')}
                />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              className="language-flagship-logo-text"
            >
             The Chinese Overseas Flagship in Taiwan 
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              className="chinese-flagship-logo"
            >
              <a href="http://chineseflagship.hunter.cuny.edu/"  target="_blank" >
                <img
                  alt="Chinese Flagship"
                  src={AssetStore.get('assets/images/HCF.jpg')}
                  height="60"
                />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  isOpened: state.sidemenu.isOpened,
});

const mapDispatchToProps = dispatch => ({
  onOpenSideMenu: () => dispatch(openSideMenu()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogoBar);
