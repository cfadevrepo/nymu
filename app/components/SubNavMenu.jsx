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
      newpage, 
    } = this.props;

    if (!opened) {
      return null;
    }

    return (
      <ul className="side-menu-sublist">
        {links.map(({ to, label, newpage }) => (
          <li
            key={to}
            className="side-menu-list-item"
          >
            {normalLink ? (
              newpage ? ( <a
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
              newpage ? 
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
