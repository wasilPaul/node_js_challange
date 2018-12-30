const fs = require("fs");
const path = require("path");
const dirname = path.join(__dirname, "files");

if (fs.existsSync(dirname)) {
  console.log("Dir already exist");
  return;
}
fs.mkdirSync(dirname);
const msOneDay = 24 * 60 * 60 * 1000;

for (let i = 0; i < 10; i++) {
  const filePath = path.join(dirname, `file${i}`);
  fs.writeFile(filePath, i, err => {
    if (err) throw err;

    const time = (Date.now() - i * msOneDay) / 1000;
    fs.utimes(filePath, time, time, err => {
      if (err) throw err;
    });
  });
}
