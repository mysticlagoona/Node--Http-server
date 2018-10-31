const http = require('http');

let state = 10;

const server = http.createServer((req, res) => {

  if (req.url.indexOf("/bad") >= 0) {
    res.writeHead(404, {
      'Content-Type': 'text/plain',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With" });
    res.write("Page not found!")
  } else {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With"
    });

    if (req.url.indexOf('/state') >= 0) { // Check that the url contain "/state"
      res.write(state.toString());
    } else if (req.url.indexOf('/add') >= 0) {
      state++;
      res.write("OK!");
    } else if (req.url.indexOf('/subtract') >= 0) {
      state--;
      res.write("OK!");
    } else if (req.url.indexOf("/reset") >= 0) {
      state = 10;
      res.write("OK!")
    }
  }

  res.end();

}).listen(8080);
