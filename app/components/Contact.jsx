import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Hero from './Hero';
import SubmenuBar from './SubmenuBar';
import Footer from './Footer';
import ContactTeam from './ContactTeam';
import ContactForm from './ContactForm';

export default class Contact extends React.PureComponent {
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
              label: 'MEET OUR TEAM',
              to: '/contact/team',
            },
            {
              label: 'CONTACT US',
              to: '/contact/form',
            },
          ]}
        />
        <Switch>
          <Route
            exact
            path="/contact/team"
            component={ContactTeam}
          />
          <Route
            exact
            path="/contact/form"
            component={ContactForm}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}
