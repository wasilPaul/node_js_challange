const fs = require("fs");

function fileSize(filenName, callback) {
  if (typeof filenName !== "string") {
    return process.nextTick(
      callback,
      new TypeError("argument should be a string")
    );
  }
  fs.stat(filenName, (err, stats) => {
    if (err) {
      return callback(err);
    }
    callback(null, stats.size);
  });
}
fileSize(__filename, (err, size) => {
  if (err) throw err;
  console.log(`Size in KB: ${size / 1024}`);
});

//console.log(`Hello!`);
