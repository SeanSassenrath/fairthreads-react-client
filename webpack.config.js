var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var assetPath = '/assets/'
var absolutePath = path.join(__dirname, 'build', assetPath)

module.exports = {
  devtool: "source-map",
  entry: {
    app: './app/components/app.jsx',
    vendor: [ '!!script!jquery/dist/jquery.min.js',
    '!!script!foundation-sites/dist/foundation.min.js'
    ]
  },
  output: {
    filename: 'public/[name].js'
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
        loader: "style!css"
      },      
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "node_modules")]
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  externals: {
    jquery: "jQuery"
  }
}

//     {
//       test: /\.scss$/,
//       exclude: [/node_modules/],
//       loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?outputStyle=expanded')
//     },
//     {
//       test: /\.css$/,
//       loader: ExtractTextPlugin.extract('style', 'css!postcss')
//     }
//   ]
// },
// postcss: function(webpack) {
//   return [
//     autoprefixer()
//   ]
// },
// sassLoader: {
//   includePaths: [path.resolve(__dirname, "node_modules")]
// },
