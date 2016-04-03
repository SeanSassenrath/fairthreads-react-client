var webpack = require('webpack');
var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
    // 'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: __dirname + '/build',
    filname: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss'
      }
      // { test: /\.jpg$|\.png$|\.svg$/,
      //   exclude: /node_modules/,
      //   loader: 'file-loader?[name].[hash].[ext]'
      // }
      ,{
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ]
  },
  // postcss: [
  //   require('autoprefixer')
  // ],
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: __dirname + '/src/index.tmpl.html',
    //   filename: './index.html'
    // }),
    new webpack.HotModuleReplacementPlugin()
  ],
  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // }
};
