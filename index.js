
module.exports = function (options, imports, register) {

  // load node modules required by this plugin
  var express = require('express');
  var connect = require('connect');
  
  var server = express.createServer();

  server.use(connect.logger({
    stream: {
      write: imports.logger.debug
    }
  }));

  var port = options.port || 3000;
  server.listen(port);
  imports.logger.info('Express server started at http://0.0.0.0:'+port);

  register(null, {
    onDestruct: function (callback) {
      server.close(callback);
      imports.logger.debug('Express server stopped');
    },
    express: server
  });
};
