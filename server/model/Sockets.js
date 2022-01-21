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

      socket.on('first-pending-ticket', ({ agent, table }, callback) => {
        const firstTicketInPending = this.TicketList.assignTicket(agent, table);
        callback(firstTicketInPending);

        this.io.emit('assigned-ticket', this.TicketList.latest13);
      });
    });
  }
}

export default Sockets;
