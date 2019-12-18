const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './app/index.jsx',
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/app'),
  },
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
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /.(jpg|jpeg|png|gif|woff(2)?|eot|otf|ttf|svg|pdf|csv)(\?[a-z0-9=\.]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: 'public',
            },
          },
        ],
      },
    ],
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
};
