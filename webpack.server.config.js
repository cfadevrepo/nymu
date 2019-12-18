const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
  entry: {
    index: './server/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/server'),
  },
  target: 'node',
  externals: [
    nodeExternals(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  devtool: 'source-map',
};