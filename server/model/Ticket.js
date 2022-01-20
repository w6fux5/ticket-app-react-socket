import { v4 as uuid } from 'uuid';

class Ticket {
  constructor(number) {
    this.id = uuid();
    this.number = number;
    this.agent = null;
    this.table = null;
  }
}

export default Ticket;
