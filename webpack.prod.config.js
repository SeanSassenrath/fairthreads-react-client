const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssvariables = require('postcss-css-variables');
const customMedia = require('postcss-custom-media');
const imports = require('postcss-import');
const nested = require('postcss-nested');
const colorFunction = require('postcss-color-function');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
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
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.tmpl.html',
      filename: './index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimise: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
