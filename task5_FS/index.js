const os = require("os");
const fs = require("fs");
const path = require("path");
const dirname = path.join(__dirname, "files");

const files = fs.readdirSync(dirname);

files.forEach(file => {
  const fielePath = path.join(dirname, file);
  fs.stat(fielePath, (err, stats) => {
    if (err) throw err;

    fs.truncate(fielPathm, stats.size / 2, err => {
      if (err) throw err;
    });
  });
});
