import Ticket from './Ticket.js';

class TicketList {
  constructor() {
    this.lastNumber = 0;
    this.pending = [];
    this.assign = [];
  }

  get nextNumber() {
    this.lastNumber++;
    return this.lastNumber;
  }

  get latest13() {
    return this.assign.slice(0, 13);
  }

  createTicket() {
    const newTick = new Ticket(this.nextNumber);
    this.pending.push(newTick);
    return newTick;
  }

  assignTicket(agent, table) {
    if (!this.pending.length) return null;
    const firstTicketInPending = this.pending.shift();
    firstTicketInPending.agent = agent;
    firstTicketInPending.table = table;
    this.assign.unshift(firstTicketInPending);
    return firstTicketInPending;
  }
}

export default TicketList;
