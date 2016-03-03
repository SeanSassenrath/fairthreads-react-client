var express = require('express');
var app = express();
var morgan = require('morgan');
// var bodyParser = require('body-parser');
var path = require('path');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

app.use(morgan('dev'));

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.en.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

if (!isProduction) {
  var bundle = require('./server/bundle.js');
  bundle();
  app.all('/build/*', function(req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

proxy.on('error', function(err) {
  console.log('Could not connect to proxy')
})

app.listen(port, function() {
  console.log('React client running on ' + port);
})
