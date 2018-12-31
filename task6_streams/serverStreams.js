const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(`${new Date().getTime()}: ${req.url}`);
  //the default limit buffer == 2GB
  /* 
    fs.readFile("./task6_streams/big.file", (err, data) => {
    if (err) {
      throw err;
    }
    res.end(data);
    }); 
  */

  //better way!, streaming data, less memory usage,
  const src = fs.createReadStream("./task6_streams/big.file");
  src.pipe(res);
});

server.listen(8000);
