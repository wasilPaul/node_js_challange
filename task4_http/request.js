const http = require("http");

const req = http.request(
  {
    hostname: "www.google.com",
    method: "GET"
  },
  res => {
    console.log(res);
  }
);

req.on("error", err => console.log(err));
req.end();
