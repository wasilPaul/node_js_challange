process.stdout.write("\u001B[2J\u001B[0;0f");
const server = require("net").createServer();

server.on("connection", socket => {
  console.log("Client connected");
  socket.write("Welcome new client!\n");
  socket.on("data", data => {
    console.log(`data is: ${data}`);
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
