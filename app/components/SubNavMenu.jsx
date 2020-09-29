import React from 'react';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';
import AssetStore from '../../lib/AssetStore';

class SubNavMenu extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  render() {
    const {
      links,
      normalLink = false,
      opened = false,
      newPage, 
    } = this.props;

    if (!opened) {
      return null;
    }

    return (
      <ul className="side-menu-sublist">
        {links.map(({ to, label, newPage }) => (
          <li
            key={to}
            className="side-menu-list-item"
          >
            {normalLink ? (
              newPage ? ( <a
                href={to}
                target="_blank"
                className="side-menu-nav-link sub-nav-link"
              >
                {label}
              </a>) :
              <a
                href={to}
                className="side-menu-nav-link sub-nav-link"
              >
                {label}
              </a>
            ) : (
              newPage ? 
              ( <NavLink
                to={to}
                exact
                target="_blank"
                className="side-menu-nav-link sub-nav-link"
              >
                {label}
              </NavLink>)
              : (
              <NavLink
                to={to}
                exact
                className="side-menu-nav-link sub-nav-link"
              >
                {label}
              </NavLink>
              ))}
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(SubNavMenu);
