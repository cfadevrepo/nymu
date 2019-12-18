import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Hero from './Hero';
import SubmenuBar from './SubmenuBar';
import Footer from './Footer';
import InternshipIntroduction from './InternshipIntroduction';
import InternshipApplicationProcess from './InternshipApplicationProcess';
import InternshipPlacement from './InternshipPlacement';

export default class Internship extends React.PureComponent {
  render() {
    const {
      location: {
        pathname,
      },
    } = this.props;

    return (
      <div>
        <Hero
          route={pathname}
        />
        <SubmenuBar
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
          ]}
        />
        <Switch>
          <Route
            exact
            path="/internship/introduction"
            component={InternshipIntroduction}
          />
          <Route
            exact
            path="/internship/application-process"
            component={InternshipApplicationProcess}
          />
          <Route
            exact
            path="/internship/placement"
            component={InternshipPlacement}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}
