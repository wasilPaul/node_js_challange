const fs = require("fs");
const server = require("https").createServer({
  /*
  command: man openssl
  command: openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
  */
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem")
});

server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello from server \n");
});

//default server timeout 2 min (120000)
server.timeout = 10000;

//PORTL 443 - default port for https communication
server.listen(443);

//command: curl -i localhost:8000
