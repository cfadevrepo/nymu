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

if(module.hot) {
  console.log("IN RELOAD");
  const FILE_NAME = 'bundle.css'
  let file = ''
  let el = document.querySelector(`link[href*="${AssetStore.get('dist/styles.css')}"]`)
  let {href} = el

  function httpGet(url, callback) {
    let xhr = new XMLHttpRequest()

    xhr.addEventListener('load', () => callback(xhr))
    xhr.open('GET', url)
    xhr.send()
  }

  module.hot.accept()
  module.hot.dispose(() => {
    let url = `${href}?d=${new Date().getTime()}`

    httpGet(url, ({responseText}) => {
      if(responseText == file)
        window.location.reload() // js was changed
      else
        el.href = url
    })
  })

  httpGet(href, ({responseText}) => {
    file = responseText
  })
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
        <title>The Chinese Overseas Flagship in Taiwan</title>
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
      <script type="text/javascript" src={AssetStore.get('dist/app.js')}></script>
      </body>
      </html>
    );
  }
}
