import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';

import Sockets from './Sockets.js';
import cors from 'cors';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // http server
    this.server = http.createServer(this.app);

    // socket
    this.io = new socketIo(this.server, {
      /* config */
      cors: {
        origin: '*',
      },
    });

    this.socket = new Sockets(this.io);
  }

  configSocket() {}

  middleware() {
    this.app.use(express.static('public'));
    this.app.use(cors());

    this.app.get('/latest', (req, res) => {
      console.log(req);
      res.json({
        ok: true,
        latestTickets: this.socket.TicketList.latest13,
      });
    });
  }

  execute() {
    // use middleware
    this.middleware();

    this.server.listen(this.port, () => {
      console.log(`server is running on prot ${this.port}`);
    });
  }
}

export default Server;
