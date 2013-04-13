livereload = require('livereload2');
server = livereload.createServer();
server.watch(__dirname);
