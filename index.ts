import * as http from "http";
import { IncomingMessage } from "http";

const server = http.createServer();
server.on("request", (request: IncomingMessage, response) => {
  console.log(request.httpVersion);
  console.log(request.url);

  console.log("有请求");
  response.end("hi\n");
});

server.listen(3020, () => {});
