const fs = require("fs");
const util = require("util");
const { join } = require("path");

//old
fs.readFile(join(__dirname, "/../task3_net/chat.js"), (err, data1) => {
  fs.readFile(join(__dirname, "/../task3_net/dns.js"), (err, data2) => {
    fs.readFile(join(__dirname, "/../task3_net/udp.js"), (err, data3) => {
      console.log(data1.toString());
      console.log(data2.toString());
      console.log(data3.toString());
    });
  });
});

//new

const read = util.promisify(fs.readFile);

Promise.all([
  read(join(__dirname, "/../task3_net/chat.js")),
  read(join(__dirname, "/../task3_net/dns.js")),
  read(join(__dirname, "/../task3_net/udp.js"))
]).then(data => {
  const [data1, data2, data3] = data;
  console.log(data1.toString());
  console.log(data2.toString());
  console.log(data3.toString());
});
