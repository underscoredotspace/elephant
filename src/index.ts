import http from "http";

const server = http.createServer((_, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, TypeScript!");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
