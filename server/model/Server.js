const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
// const path = require('path');
const Sockets = require('./Sockets');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // http server
    this.server = http.createServer(this.app);

    // socket
    this.io = socketIo(this.server, {
      /* config */
    });
  }

  configSocket() {
    new Sockets(this.io);
  }

  middleware() {
    this.app.use(express.static('public'));

    // cors
    this.app.use(cors());
  }

  execute() {
    // use middleware
    this.middleware();

    // config socket
    this.configSocket();

    this.server.listen(this.port, () => {
      console.log(`server is running on prot ${this.port}`);
    });
  }
}

module.exports = Server;
