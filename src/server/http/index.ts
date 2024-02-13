import { readFile } from "fs";
import { dirname, resolve } from "path";
import { createServer } from "http";

const PORT = 8181;

const httpServer = createServer(function (req, res) {
  const __dirname = resolve(dirname(""));
  const filePath =
    __dirname + (req.url === "/" ? "/front/index.html" : "/front" + req.url);
  readFile(filePath, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});

httpServer.listen(PORT, () => {
  console.log(`HTTP server is running on port: ${PORT}`);
});

export default httpServer;
