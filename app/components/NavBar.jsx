import React from 'react';
import {
  NavLink,
  Link,
  withRouter,
} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-container app-bar">
        <div className="navbar">
          <NavLink
            to="/"
            exact
            className="navbar-link"
          >
            HOME
          </NavLink>
          <div className="dropdown">
            <div className="dropbtn">
              PROGRAM OVERVIEW
            </div>
            <div className="dropdown-content">
              <Link to="/program-overview/introduction">
                INTRODUCTION
              </Link>
              <Link to="/program-overview/calendar">
                CALENDAR
              </Link>
              <Link to="/program-overview/estimated-costs">
                ESTIMATED COSTS
              </Link>
              <Link to="/program-overview/orientation-information">
                ORIENTATION INFORMATION
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              ACADEMICS
            </div>
            <div className="dropdown-content">
              <Link to="/academics/introduction">
                INTRODUCTION
              </Link>
              <Link to="/academics/tutoring-support">
                TUTORING SUPPORT
              </Link>
              <Link to="/academics/certifications">
                CERTIFICATIONS
              </Link>
              <Link to="/academics/credits-transcript">
                CREDITS & TRANSCRIPTS
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              INTERNSHIP
            </div>
            <div className="dropdown-content">
              <Link to="/internship/introduction">
                INTRODUCTION
              </Link>
              <Link to="/internship/application-process">
                APPLICATION PROCESS
              </Link>
              <Link to="/internship/placement">
                PLACEMENT
              </Link>
<a
               target = "_blank"
             
              >
                INTERNSHIP HANDBOOK
              </a>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              STUDENT LIFE
            </div>
            <div className="dropdown-content">
              <Link to="/student-life">
                INTRODUCTION
              </Link>
              <a
                            
                href="#"
              >
                PROGRAM HANDBOOK
              </a>
              <a
              
                href="#"
              >
                STUDENT LIFE GUIDEBOOK
              </a>

            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              NATIONAL YANG-MING UNIVERSITY
            </div>
            <div className="dropdown-content">
              <Link to="/yang-ming-university/introduction">
                INTRODUCTION
              </Link>
              <Link to="/yang-ming-university/housing-options">
                HOUSING
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              CONTACT
            </div>
            <div className="dropdown-content">
              <Link to="/contact/team">
                MEET OUR TEAM
              </Link>
              <Link to="/contact/form">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
