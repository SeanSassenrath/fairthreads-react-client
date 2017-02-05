const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const autoprefixer = require('autoprefixer');
// const cssvariables = require('postcss-css-variables');
// const customMedia = require('postcss-custom-media');
// const imports = require('postcss-import');
// const nested = require('postcss-nested');
// const colorFunction = require('postcss-color-function');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMaps: true,
                // importLoaders: 1,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('postcss-import'),
                    require('postcss-css-variables'),
                    require('autoprefixer'),
                    require('postcss-custom-media'),
                    require('postcss-import'),
                    require('postcss-nested'),
                    require('postcss-color-function'),
                  ];
                },
              },
            },
          ],
        }),
      },
      {
        use: 'file-loader?[name].[hash].[ext]',
        test: /\.jpg$|\.png$|\.svg$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: './src/index.tmpl.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
};
