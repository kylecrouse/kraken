'use strict';

var path = require('path');
var connect = require('connect');
var http = require('http');
var https = require('https');

var options = {
  protocol: 'http',
  port: process.env.PORT || 8000,
  hostname: '*',
  base: './app',
  directory: null,
  middleware: function(connect, options) {
    var middlewares = [];
    var directory = options.directory || options.base[options.base.length - 1];
    if (!Array.isArray(options.base)) {
      options.base = [options.base];
    }
    options.base.forEach(function(base) {
      // Serve static files.
      middlewares.push(connect.static(base));
    });
    // Make directory browse-able.
    middlewares.push(connect.directory(directory));
    return middlewares;
  }
};

if (options.protocol !== 'http') {
  grunt.fatal('protocol option must be \'http\'');
}

// Connect requires the base path to be absolute.
if (Array.isArray(options.base)) {
  options.base = options.base.map(function(base) {
    return path.resolve(base);
  });
} else {
  options.base = path.resolve(options.base);
}

// Connect will listen to all interfaces if hostname is null.
if (options.hostname === '*') {
  options.hostname = null;
}

// Connect will listen to ephemeral port if asked
if (options.port === '?') {
  options.port = 0;
}

var middleware = options.middleware ? options.middleware.call(this, connect, options) : [];

// Start server.
var app = connect.apply(null, middleware);
var server = null;

server = http.createServer(app);

server
  .listen(options.port, options.hostname)
  .on('listening', function() {
    var address = server.address();
    console.log('Started connect web server on ' + (address.address || 'localhost') + ':' + address.port + '.');
  })
  .on('error', function(err) {
    if (err.code === 'EADDRINUSE') {
      console.log('Port ' + options.port + ' is already in use by another process.');
    } else {
      console.log(err);
    }
  });
