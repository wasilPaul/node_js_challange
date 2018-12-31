const fs = require("fs");
const file = fs.createWriteStream("./task6_streams/big.file");

for (let i = 0; i < 1000; i++) {
  file.write("Lorem ipsum dolor sit amet, consectetur adipisicing elit");
}

file.end();
