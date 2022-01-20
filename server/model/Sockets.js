class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvens();
  }

  socketEvens() {
    this.io.on('connection', (socket) => {
      console.log(socket.id);
      socket.on('message-to-server', (data) => {
        this.io.emit('message-from-server', data);
      });
    });
  }
}

export default Sockets;
