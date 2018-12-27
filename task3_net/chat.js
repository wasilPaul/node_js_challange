process.stdout.write("\u001B[2J\u001B[0;0f");
const server = require("net").createServer();

let counter = 0;
let sockets = {};

server.on("connection", socket => {
  socket.id = counter++;
  function timestamp() {
    let newTime = new Date();
    return `${newTime.getHours()}:${newTime.getMinutes()}`;
  }
  console.log("Client connected");
  socket.write("Please type your name: ");
  socket.on("data", data => {
    if (!sockets[socket.id]) {
      socket.name = data.toString().trim();
      socket.write(`Welcome ${socket.name}! \n`);
      sockets[socket.id] = socket;
      return;
    }
    Object.entries(sockets).forEach(([key, cs]) => {
      if (socket.id == key) return;
      cs.write(`${timestamp()} / ${socket.name} : `);
      cs.write(`${data}`);
    });
  });
  socket.setEncoding("utf8");
  socket.on("end", () => {
    delete sockets[socket.id];
    console.log("Client disconected");
  });
});

server.listen(8000, () => console.log("Server bound"));

//start: node test3_net/net.js
// nc localhost 8000
