import * as http from "http";
import { IncomingMessage, ServerResponse } from "http";

const server = http.createServer();
server.on("request", (request: IncomingMessage, response: ServerResponse) => {
  console.log(request.httpVersion);
  console.log(request.url);
  const data = [];
  request.on("data", (chunk) => {
    data.push(chunk);
  });
  request.on("end", (chunk) => {
    const body = Buffer.concat(data).toString();
    console.log(body);
    response.end("hi\n");
  });

  console.log("有请求");
});

server.listen(3020, () => {});
