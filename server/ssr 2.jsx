import { Router } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { ServerStyleSheet } from 'styled-components';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

import HTML from '../app/components/Html';
import App from '../app/components/App';
import configureStore from '../app/store/store.dev';

const router = Router();

function ssr(dataHandler) {
  return async (req, res) => {
    // Create a sheetsRegistry instance.
    const sheetsRegistry = new SheetsRegistry();

    // Create a sheetsManager instance.
    const sheetsManager = new Map();

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

    let data;

    try {
      data = await dataHandler(req, res);
    } catch {
      console.error('Could not fetch the data for universal route.');
    }

    if (req.xhr) {
      return res.json(data || {});
    }

    const store = configureStore(data || {});
    const context = {
      assetBasePath: process.env.ASSET_BASE_PATH || '',
      state: store.getState(),
    };

    const sheet = new ServerStyleSheet();

    const app = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <Provider store={store}>
          <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
              <StaticRouter
                location={req.url}
                context={context}
              >
                <App />
              </StaticRouter>
            </MuiThemeProvider>
          </JssProvider>
        </Provider>,
      ));

    // Grab the CSS from our sheetsRegistry.
    const css = sheetsRegistry.toString();
    const styles = sheet.getStyleTags();

    const html = ReactDOMServer.renderToStaticMarkup(
      <HTML
        {...context}
        app={app}
        css={css}
        styles={styles}
      />,
    );

    res.send(`<!doctype html>${html}`);
  };
}

const get = (path, dataHandler) => router.get(path, ssr(dataHandler));
const post = (path, dataHandler) => router.post(path, ssr(dataHandler));
const put = (path, dataHandler) => router.put(path, ssr(dataHandler));
const del = (path, dataHandler) => router.delete(path, ssr(dataHandler));

export default {
  get,
  post,
  put,
  del,
  router
};
