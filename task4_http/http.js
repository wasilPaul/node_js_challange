//server: http.Server
const server = require("http").createServer();

server.on("request", (req, res) => {
  //req: http.IncomingMessage
  //res: http.ServerResponse
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello from server \n");
});

server.timeout = 10000; //default 2 min (120000)
server.listen(8000);

//command: curl -i localhost:8000
