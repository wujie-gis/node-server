//利用nodejs搭建一个服务器以响应对应目录下的网站
import * as http from "http";
//利用fs读取文件
import * as fs from "fs";
//利用自定义工具模块判断文件类型
import * as utility from "./lib/utility";
//利用path的方法获取文件后缀
import * as path from "path";
//利用url获取文件的后缀，去掉JSON数据后的字符串
import * as url from "url";

import * as cors from "cors";

http
  .createServer(function (request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    let pathname = url.parse(request.url).pathname;
    pathname = pathname === "/" ? "/index.html" : pathname;
    let extname = path.extname(pathname);

    if (pathname != "/favicon.ico") {
      fs.readFile("./dist" + pathname, (err, data) => {
        if (err) {
          response.writeHead(404, {
            "Content-Type": "text/html;charset=utf-8",
          });
          response.end("页面丢失了"); //也可以直接返回页面的内容
        }
        let mine = utility.getMine(extname);
        response.writeHead(200, { "Content-Type": `${mine};charset=utf-8"` });
        response.end(data);
      });
    }
  })
  .listen(4001);

console.log("Server running at http://127.0.0.1:4001/");
