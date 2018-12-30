const fs = require("fs");

const out = fs.createWriteStream("./task5_FS/files/out.log");
const err = fs.createWriteStream("./task5_FS/files/err.log");

const console1 = new console.Console(out, err);

setInterval(() => {
  console1.log(new Date());
  console1.error(new Error("Whoopssss!"));
}, 5000);
