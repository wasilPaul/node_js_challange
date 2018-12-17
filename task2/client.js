const EventEmitter = require("events"),
  readline = require("readline"),
  client = new EventEmitter(),
  server = require("./server")(client),
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

server.on("response", resp => {
  process.stdout.write("\u001B[2J\u001B[0;0f");
  process.stdout.write(resp);
  process.stdout.write("\n> ");
});

rl.on("line", input => {
  client.emit("command", input);
});


//start: node task\ 2/client.js