const http = require("http");
const { WispServer } = require("wisp-server-node");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("WISP server running");
});

const wisp = new WispServer({ server });
wisp.start();

server.listen(PORT, "0.0.0.0", () => {
  console.log(`WISP server listening on port ${PORT}`);
});
