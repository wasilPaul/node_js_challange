const fs = require("fs");
const { join } = require("path");
const server = require("http").createServer();

const data = { username: "wasPaul" };

server.on("request", (req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/api":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
      break;
    case "/home":
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(fs.readFileSync(join(__dirname, `./${req.url}.html`), "utf8"));
      break;
    case "/":
      res.writeHead(301, { Location: "/home" });
      res.end();
      break;
    default:
      res.writeHead(404);
      res.end();
  }
});

server.listen(7000);

//command: node http.STATUS_CODES --> all available status code
//url.parse('https://www.google.com'), querystring.stringify({...})
