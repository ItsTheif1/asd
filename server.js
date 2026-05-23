const { createServer } = require("http");
const { createWispServer } = require("wisp-server-node");

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("WISP server running");
});

createWispServer({ server });

server.listen(PORT, () => {
  console.log(`WISP server listening on port ${PORT}`);
});
