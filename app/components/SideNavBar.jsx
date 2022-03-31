import React from 'react';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ExpandIcon from '@material-ui/icons/Add';
import CollapseIcon from '@material-ui/icons/Remove';
import Grid from '@material-ui/core/Grid';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { connect } from 'react-redux';
import AssetStore from '../../lib/AssetStore';
import {
  closeSideMenu,
  openSubMenu,
  closeSubMenu,
} from '../actions/sidemenuActions';
import SubNavMenu from './SubNavMenu';

/**
 * @type {string}
 */
const SUB_MENU_PROGRAM_OVERVIEW = 'PROGRAM-OVERVIEW';

/**
 * @type {string}
 */
const SUB_MENU_ACADEMICS = 'ACADEMICS';

/**
 * @type {string}
 */
const SUB_MENU_INTERNSHIP = 'INTERNSHIP';

/**
 * @type {string}
 */
const SUB_MENU_STUDENT_LIFE = 'STUDENT-LIFE';

/**
 * @type {string}
 */
const SUB_MENU_TAIWAN_UNIVERSITY = 'YANG-MING-UNIVERSITY';

/**
 * @type {string}
 */
const SUB_MENU_CONTACT = 'CONTACT';

class SideNavBar extends React.Component {
  toggleSubMenu = subMenu => () => {
    const {
      openedSubMenu,
      onOpenSubMenu,
      onCloseSubMenu,
    } = this.props;

    if (openedSubMenu === subMenu) {
      onCloseSubMenu();
    } else {
      onOpenSubMenu(subMenu);
    }
  };

  render() {
    const {
      isOpened,
      openedSubMenu,
      onCloseSideMenu,
    } = this.props;

    return (
      <ClickAwayListener onClickAway={onCloseSideMenu}>
        <Drawer
          variant="persistent"
          anchor="left"
          open={isOpened}
          className="side-menu"
          classes={{
            paper: 'side-menu-container',
          }}
        >
          <Grid
            container
            spacing={24}
            className="condensed-menu-bar"
          >
            <Grid
              item
              xs={3}
              style={{
                marginTop: '3px',
                paddingLeft: '20px',
              }}
            >
              <IconButton onClick={onCloseSideMenu}>
                <CloseIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item xs={9}>
              <img
                alt="Chinese Flagship"
                width="150"
                src={AssetStore.get('assets/images/LOGO_Flagship.png')}
              />
            </Grid>
          </Grid>
          <ul className="side-menu-list">
            <li className="side-menu-list-item">
              <NavLink
                to="/"
                exact
                className="side-menu-nav-link"
              >
                HOME
              </NavLink>
            </li>
            <li className="side-menu-list-item">
              <Grid
                container
                spacing={16}
                alignItems="center"
                onClick={this.toggleSubMenu(SUB_MENU_PROGRAM_OVERVIEW)}
                className="side-menu-list-item-expandable-container"
              >
                <Grid item xs={10} className="side-menu-list-item-expandable">
                  <div className="side-menu-nav-link label">
                    PROGRAM OVERVIEW
                  </div>
                </Grid>
                <Grid item>
                  {openedSubMenu === SUB_MENU_PROGRAM_OVERVIEW ? <CollapseIcon /> : <ExpandIcon />}
                </Grid>
              </Grid>
              <SubNavMenu
                opened={openedSubMenu === SUB_MENU_PROGRAM_OVERVIEW}
                links={[
                  {
                    to: '/program-overview/introduction',
                    label: 'INTRODUCTION',
                  },
                  {
                    to: '/program-overview/calendar',
                    label: 'CALENDAR',
                  },
                  {
                    to: '/program-overview/estimated-costs',
                    label: 'ESTIMATED COSTS',
                  },
                  {
                    to: '/program-overview/orientation-information',
                    label: 'ORIENTATION INFORMATION',
                  },
                ]}
              />
            </li>
            <li className="side-menu-list-item">
              <Grid
                container
                spacing={16}
                alignItems="center"
                onClick={this.toggleSubMenu(SUB_MENU_ACADEMICS)}
                className="side-menu-list-item-expandable-container"
              >
                <Grid item xs={10} className="side-menu-list-item-expandable">
                  <div className="side-menu-nav-link label">
                    ACADEMICS
                  </div>
                </Grid>
                <Grid item>
                  {openedSubMenu === SUB_MENU_ACADEMICS ? <CollapseIcon /> : <ExpandIcon />}
                </Grid>
              </Grid>
              <SubNavMenu
                opened={openedSubMenu === SUB_MENU_ACADEMICS}
                links={[
                  {
                    to: '/academics/introduction',
                    label: 'INTRODUCTION',
                  },
                  {
                    to: '/academics/tutoring-support',
                    label: 'TUTORING SUPPORT',
                  },
                  {
                  to: '/academics/educational-excursions',
                  label: 'EDUCATIONAL EXCURSIONS',
                  },
                  {
                    to: '/academics/certifications',
                    label: 'CERTIFICATIONS',
                  },
                  {
                    to: '/academics/credits-transcript',
                    label: 'CREDITS & TRANSCRIPTS',
                  },
                ]}
              />
            </li>
            <li className="side-menu-list-item">
              <Grid
                container
                spacing={16}
                alignItems="center"
                onClick={this.toggleSubMenu(SUB_MENU_INTERNSHIP)}
                className="side-menu-list-item-expandable-container"
              >
                <Grid item xs={10} className="side-menu-list-item-expandable">
                  <div className="side-menu-nav-link label">
                    INTERNSHIP
                  </div>
                </Grid>
                <Grid item>
                  {openedSubMenu === SUB_MENU_INTERNSHIP ? <CollapseIcon /> : <ExpandIcon />}
                </Grid>
              </Grid>
              <SubNavMenu
                opened={openedSubMenu === SUB_MENU_INTERNSHIP}
                links={[
                  {
                    label: 'INTRODUCTION',
                    to: '/internship/introduction',
                  },
                  {
                    label: 'APPLICATION PROCESS',
                    to: '/internship/application-process',
                  },
                  {
                    label: 'PLACEMENT',
                    to: '/internship/placement',
                  },
 		  {
                    label: 'INTERNSHIP HANDBOOK',
                    to: '/assets/Internship-Handbook.pdf',
                    normalLink: true,
                    newPage: true,
                  },

                ]}
              />
            </li>
            <li className="side-menu-list-item">
              <Grid
                container
                spacing={16}
                alignItems="center"
                onClick={this.toggleSubMenu(SUB_MENU_STUDENT_LIFE)}
                className="side-menu-list-item-expandable-container"
              >
                <Grid item xs={10} className="side-menu-list-item-expandable">
                  <div className="side-menu-nav-link label">
                    STUDENT LIFE
                  </div>
                </Grid>
                <Grid item>
                  {openedSubMenu === SUB_MENU_STUDENT_LIFE ? <CollapseIcon /> : <ExpandIcon />}
                </Grid>
              </Grid>
              <SubNavMenu
                opened={openedSubMenu === SUB_MENU_STUDENT_LIFE}
                links={[
                  {
                    label: 'INTRODUCTION',
                    to: '/student-life',
                  },
                  {
                    label: 'PROGRAM HANDBOOK',
                    to: '/assets/program-handbook.pdf',
                    normalLink: true,
                    newPage: true,
                  },
                  {
                    label: 'STUDENT LIFE GUIDEBOOK',
                    to: '#',
                    normalLink: true,
                  },
                ]}
              />
            </li>
            <li className="side-menu-list-item">
              <Grid
                container
                spacing={16}
                alignItems="center"
                onClick={this.toggleSubMenu(SUB_MENU_TAIWAN_UNIVERSITY)}
                className="side-menu-list-item-expandable-container"
              >
                <Grid item xs={10} className="side-menu-list-item-expandable">
                  <div className="side-menu-nav-link label">
                    NATIONAL YANG MING CHIAO TUNG UNIVERSITY
                  </div>
                </Grid>
                <Grid item>
                  {openedSubMenu === SUB_MENU_TAIWAN_UNIVERSITY ? <CollapseIcon /> : <ExpandIcon />}
                </Grid>
              </Grid>
              <SubNavMenu
                opened={openedSubMenu === SUB_MENU_TAIWAN_UNIVERSITY}
                links={[
                  {
                    label: 'INTRODUCTION',
                    to: '/yang-ming-university/introduction',
                  },
                  {
                    label: 'HOUSING',
                    to: '/yang-ming-university/housing-options',
                  },
                ]}
              />
            </li>
            <li className="side-menu-list-item">
              <Grid
                container
                spacing={16}
                alignItems="center"
                onClick={this.toggleSubMenu(SUB_MENU_CONTACT)}
                className="side-menu-list-item-expandable-container"
              >
                <Grid item xs={10} className="side-menu-list-item-expandable">
                  <div className="side-menu-nav-link label">
                    CONTACT
                  </div>
                </Grid>
                <Grid item>
                  {openedSubMenu === SUB_MENU_CONTACT ? <CollapseIcon /> : <ExpandIcon />}
                </Grid>
              </Grid>
              <SubNavMenu
                opened={openedSubMenu === SUB_MENU_CONTACT}
                links={[
                  {
                    label: 'MEET OUR TEAM',
                    to: '/contact/team',
                  },
                  {
                    label: 'CONTACT US',
                    to: '/contact/form',
                  },
                ]}
              />
            </li>
          </ul>
        </Drawer>
      </ClickAwayListener>
    );
  }
}

const mapStateToProps = ({ sidemenu }) => ({
  isOpened: sidemenu.isOpened,
  openedSubMenu: sidemenu.openedSubMenu,
});

const mapDispatchToProps = dispatch => ({
  onCloseSideMenu: () => dispatch(closeSideMenu()),
  onOpenSubMenu: value => dispatch(openSubMenu(value)),
  onCloseSubMenu: () => dispatch(closeSubMenu()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SideNavBar),
);
