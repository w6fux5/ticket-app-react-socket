import TicketList from './TicketList.js';

class Sockets {
  constructor(io) {
    this.io = io;
    this.TicketList = new TicketList();
    this.socketEvens();
  }

  socketEvens() {
    this.io.on('connection', (socket) => {
      socket.on('create-ticket', (_, callback) => {
        const newTicket = this.TicketList.createTicket();
        callback(newTicket);
      });
    });
  }
}

export default Sockets;
