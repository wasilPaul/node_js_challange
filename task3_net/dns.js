const dns = require("dns");

dns.lookup("britenet.com", (err, address) => {
  console.log("lookup: ", address);
});

dns.resolve4("google.com", (err, address) => {
  console.log("resolve4: ", address);
});

dns.resolve("google.com", "MX", (err, address) => {
  console.log("resolve with MX: ", address);
});

//resolve ip
dns.reverse("54.191.212.90", (err, hostname) => {
  console.log("hostname: ", hostname);
});
