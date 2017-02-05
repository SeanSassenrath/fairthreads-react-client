var express = require('express');
var path = require('path');

module.exports = {
  app: function() {
    const app = express();
    const indexPath = path.join(__dirname, './build/index.html');
    const publicPath = express.static(path.join(__dirname, './build'));
    console.log('production')

    app.use('/build', publicPath);
    app.get('*', function(_, res) { res.sendFile(indexPath) });

    return app;
  }
};
