const { Writable } = require("stream");

const outStram = new Writable({
  write(chunk, encoding, collback) {
    console.log(chunk.toString());
    collback();
  }
});

process.stdin.pipe(outStram);

// the same feature:
//process.stdin.pipe(process.stdout);
