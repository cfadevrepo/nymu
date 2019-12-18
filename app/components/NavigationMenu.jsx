import React from 'react';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';

class NavigationMenu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SideNavBar />
      </React.Fragment>
    );
  }
}

export default NavigationMenu;
