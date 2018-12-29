const fs = require("fs");
const path = require("path");
const dirname = path.join(__dirname, "files");

const files = fs.readdirSync(dirname);
const msOneDay = 24 * 60 * 60 * 1000;

files.forEach(file => {
  const filePath = path.join(dirname, file);
  fs.stat(filePath, (err, stats) => {
    if (err) throw err;
    if (Date.now() - stats.mtime.getTime() > 7 * msOneDay) {
      fs.unlink(filePath, err => {
        if (err) throw err;
        console.log(`Deleted ${filePath}`);
      });
    }
  });
});
