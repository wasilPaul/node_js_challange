const { Readable } = require("stream");

/* 
const inStream = new Readable();

inStream.push("Some data");
inStream.push(null);
*/

const inStream = new Readable({
  read(size) {
    this.push(String.fromCharCode(this.currentCharcode++));
    if (this.currentCharcode > 90) {
      this.push(null);
    }
  }
});

inStream.currentCharcode = 65;

inStream.pipe(process.stdout);
