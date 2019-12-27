import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Hero from './Hero';
import Footer from './Footer';
import SubmenuBar from './SubmenuBar';
import TaiwanUniversityIntroduction from './TaiwanUniversityIntroduction';
import TaiwanUniversityHousingOptions from './TaiwanUniversityHousingOptions';

export default class TaiwanUniversity extends React.PureComponent {
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
              to: '/taiwan-university/introduction',
            },
            {
              label: 'HOUSING OPTIONS',
              to: '/taiwan-university/housing-options',
            },
          ]}
        />
        <Switch>
          <Route
            exact
            path="/taiwan-university/introduction"
            component={TaiwanUniversityIntroduction}
          />
          <Route
            exact
            path="/taiwan-university/housing-options"
            component={TaiwanUniversityHousingOptions}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}
