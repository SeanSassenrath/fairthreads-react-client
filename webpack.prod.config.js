const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VENDOR_LIBS = require('./vendors');

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './src/index.jsx',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    publicPath: '/build/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            { loader: 'css-loader',
              query: {
                modules: true,
                sourceMaps: true,
                importLoaders: 1,
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
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
    }),
    new webpack.optimize.UglifyJsPlugin({
      // minimise: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
