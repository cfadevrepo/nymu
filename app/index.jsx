/* global document window */
/* eslint no-underscore-dangle: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';

import '../sass/index.scss';
import App from './components/App';
import configureStore from './store/store.dev';

window.__react_context__ = JSON.parse(decodeURIComponent(window.__react_context__));

const {
  state,
} = window.__react_context__;
const store = configureStore(state);

class Main extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <BrowserRouter basename="/overseasintaipei">
        <App />
      </BrowserRouter>
    );
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: purple,
    accent: red,
    type: 'light',
  },
  typography: {
    useNextVariants: true,
  },
});

// Create a new class name generator.
const generateClassName = createGenerateClassName();

ReactDOM.hydrate(
  <Provider store={store}>
    <JssProvider generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <Main />
      </MuiThemeProvider>
    </JssProvider>
  </Provider>,
  document.getElementById('app'),
);
