
module.exports = function (options, imports, register) {

  // load node modules required by this plugin
  var express = require('express');
  
  var server = express();

  server.use(express.logger({
    stream: {
      write: imports.logger.verbose
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
