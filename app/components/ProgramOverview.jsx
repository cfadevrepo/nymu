import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Hero from './Hero';
import SubmenuBar from './SubmenuBar';
import Footer from './Footer';
import ProgramOverviewIntroduction from './ProgramOverviewIntroduction';
import ProgramOverviewCalendar from './ProgramOverviewCalendar';
import ProgramOverview12Flagships from './ProgramOverview12Flagships';
import ProgramOverviewEstimatedCosts from './ProgramOverviewEstimatedCosts';
import ProgramOverviewOrientationInformation from './ProgramOverviewOrientationInformation';

export default class ProgramOverview extends React.PureComponent {
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
              to: '/program-overview/introduction',
            },
            {
              label: 'CALENDAR',
              to: '/program-overview/calendar',
            },
            {
              label: 'ESTIMATED COSTS',
              to: '/program-overview/estimated-costs',
            },
            {
              label: 'ORIENTATION INFORMATION',
              to: '/program-overview/orientation-information',
            },
          ]}
        />
        <Switch>
          <Route
            exact
            path="/program-overview/introduction"
            component={ProgramOverviewIntroduction}
          />
          <Route
            exact
            path="/program-overview/calendar"
            component={ProgramOverviewCalendar}
          />
          <Route
            exact
            path="/program-overview/12-chinese-flagships"
            component={ProgramOverview12Flagships}
          />
          <Route
            exact
            path="/program-overview/estimated-costs"
            component={ProgramOverviewEstimatedCosts}
          />
          <Route
            exact
            path="/program-overview/orientation-information"
            component={ProgramOverviewOrientationInformation}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}
