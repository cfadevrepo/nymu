import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Hero from './Hero';
import Footer from './Footer';
import SubmenuBar from './SubmenuBar';
import YangMingUniversityIntroduction from './YangMingUniversityIntroduction';
import YangMingUniversityHousingOptions from './YangMingUniversityHousingOptions';

export default class YangMingUniversity extends React.PureComponent {
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
              to: '/yang-ming-university/introduction',
            },
            {
              label: 'HOUSING OPTIONS',
              to: '/yang-ming-university/housing-options',
            },
          ]}
        />
        <Switch>
          <Route
            exact
            path="/yang-ming-university/introduction"
            component={YangMingUniversityIntroduction}
          />
          <Route
            exact
            path="/yang-ming-university/housing-options"
            component={YangMingUniversityHousingOptions}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}
