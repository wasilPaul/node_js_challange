process.stdout.write("\u001B[2J\u001B[0;0f");
const server = require("net").createServer();
let counter = 0;
let sockets = {};

server.on("connection", socket => {
  socket.id = counter++;
  sockets[socket.id] = socket;
  console.log("Client connected");
  socket.write("Welcome new client!\n");
  socket.on("data", data => {
    socket.write(`${socket.id}`);
    socket.write(`data is: ${data}`);
  });
  socket.setEncoding("utf8");
  socket.on("end", () => {
    console.log("Client disconected");
  });
});

server.listen(8000, () => console.log("Server bound"));

//start: node test3_net/net.js
// nc localhost 8000
