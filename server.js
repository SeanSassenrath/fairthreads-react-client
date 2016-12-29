const Server = require('./app.js');
const port = (process.env.PORT || 8080);
const app = Server.app();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.js');
  const complier = webpack(config);

  app.use(webpackHotMiddleware(complier))
  app.use(webpackDevMiddleware(complier, {
    noInfo: false,
    publicPath: config.output.publicPath
  }))

  app.use('*', function(req, res, next) {
    var filename = path.join(complier.outputPath, 'index.html');
    complier.outputFileSystem.readFile(filename, function(err, result){
      if(err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
};

app.listen(port);
console.log(`Server running on ${port}`);
