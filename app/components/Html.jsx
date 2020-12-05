import React from 'react';
import AssetStore from '../../lib/AssetStore';

function renderState(context) {
  return {
    __html: `window.__react_context__ = "${encodeURIComponent(JSON.stringify(context))}";`,
  };
}

function renderApp(app) {
  return {
    __html: app,
  };
}


export default class HTML extends React.Component {
  render() {
    const {
      app = '',
      assetBasePath,
      css,
      state,
      styles,
    } = this.props;
    const context = {
      state,
      assetBasePath,
    };

    return (
      <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The Chinese Flagship Overseas Capstone Program in Taiwan</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <style id="jss-server-side">
          {styles}
          {css}
        </style>
        <link rel="stylesheet" type="text/css" href='http://chineseflagship.hunter.cuny.edu/overseasintaipeifall2020/dist/styles.css'/>
      </head>
      <body>
      <div id="app" dangerouslySetInnerHTML={renderApp(app)}></div>
      <script type="text/javascript" dangerouslySetInnerHTML={renderState(context)}></script>
      <script type="text/babel" src={AssetStore.get('dist/app.js')}></script>
      </body>
      </html>
    );
  }
}
