const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const autoprefixer = require('autoprefixer');
const cssvariables = require('postcss-css-variables');
const customMedia = require('postcss-custom-media');
const imports = require('postcss-import');
const nested = require('postcss-nested');
const colorFunction = require('postcss-color-function');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
      },
      { test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss'
      },
      { test: /\.jpg$|\.png$|\.svg$/,
        exclude: /node_modules/,
        loader: 'file-loader?[name].[hash].[ext]'
      }
    ]
  },
  postcss: function () { return [ autoprefixer, imports, nested, customMedia, cssvariables ] },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.tmpl.html',
      filename: './index.html'
    }),
    new DashboardPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
  }
};
