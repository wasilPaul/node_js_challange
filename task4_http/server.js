const fs = require("fs");
const { join } = require("path");
const server = require("http").createServer();

server.on("request", (req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/home":
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(fs.readFileSync(join(__dirname, `./${req.url}.html`), "utf8"));
      break;
    case "/":
      res.writeHead(301, { Location: "/home" });
      res.end();
    default:
      break;
  }
});

server.listen(7000);
