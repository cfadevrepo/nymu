import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import NavigationMenu from './NavigationMenu';
import TopBar from './TopBar';
import LogoBar from './LogoBar';
import Home from './Home';
import ProgramOverview from './ProgramOverview';
import Academics from './Academics';
import Internship from './Internship';
import StudentLife from './StudentLife';
import YangMingUniversity from './YangMingUniversity';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return (
      <div className="root-container">
        <TopBar />
        <LogoBar />
        <NavigationMenu />
        <main
          style={{
            marginTop: '10px',
          }}
        >
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              path="/program-overview/"
              component={ProgramOverview}
            />
            <Route
              path="/academics/"
              component={Academics}
            />
            <Route
              path="/internship/"
              component={Internship}
            />
            <Route
              path="/student-life/"
              component={StudentLife}
            />
            <Route
              path="/yang-ming-university"
              component={YangMingUniversity}
            />
            <Route
              path="/contact"
              component={Contact}
            />
            <Route
              component={Home}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default hot(App);
