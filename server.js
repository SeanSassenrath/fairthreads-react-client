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
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.listen(port)
  console.log(`Dev server running on ${port}`)
}
