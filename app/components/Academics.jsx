import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Hero from './Hero';
import SubmenuBar from './SubmenuBar';
import Footer from './Footer';
import AcademicsIntroduction from './AcademicsIntroduction';
import AcademicsTutoringSupport from './AcademicsTutoringSupport';
import AcademicsCertifications from './AcademicsCertifications';
import AcademicsCreditsTranscript from './AcademicsCreditsTranscript';
import AcademicsEducationalExcursions from './AcademicsEducationalExcursions';

export default class Academics extends React.PureComponent {
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
              to: '/academics/introduction',
            },
            {
              label: 'TUTORING SUPPORT',
              to: '/academics/tutoring-support',
            },
            {
              label: 'EDUCATIONAL EXCURSIONS',
              to: '/academics/educational-excursions',
            },
            {
              label: 'CERTIFICATIONS',
              to: '/academics/certifications',
            },
            {
              label: 'CREDITS & TRANSCRIPTS',
              to: '/academics/credits-transcript',
            },
          ]}
        />
        <Switch>
          <Route
            exact
            path="/academics/introduction"
            component={AcademicsIntroduction}
          />
          <Route
            exact
            path="/academics/tutoring-support"
            component={AcademicsTutoringSupport}
          />
          <Route
            exact
            path="/academics/educational-excursions"
            component={AcademicsEducationalExcursions}
          />
          <Route
            exact
            path="/academics/certifications"
            component={AcademicsCertifications}
          />
          <Route
            exact
            path="/academics/credits-transcript"
            component={AcademicsCreditsTranscript}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}
