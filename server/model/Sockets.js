class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvens();
  }

  socketEvens() {
    this.io.on('connection', (socket) => {
      socket.on('message-to-server', (data) => {
        console.log(data);
        this.io.emit('message-from-server', data);
      });
    });
  }
}

export default Sockets;
