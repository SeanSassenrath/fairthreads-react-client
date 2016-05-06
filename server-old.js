var express = require('express');
var path = require('path');
var webpack = require('webpack');
var app = express();

var isDev = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'build');

app.use(express.static(static_path))
  .get('/', function(req, res) {
    res.sendFile('index.html', {
      root: static_path
    })
  }).listen(process.env.PORT || 8080, function(err) {
    if (err) { console.log(err) };
    console.log('Dev server running on localhost:8080');
  });

  if (isDev) {
    var config = require('./webpack.config');
    var WebpackDevServer = require('webpack-dev-server');

    new WebpackDevServer(webpack(config), {
      path: config.output.path,
      hot: true
    }).listen(3000, 'localhost', function(err, result) {
      if (err) { console.log(err) }
      console.log('Listening at localhost:3000');
    });
  }