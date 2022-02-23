//处理页面类型，返回对应的格式
import * as fs from "fs";
import * as path from "path"; //解决路径报错问题

export function getMine(extname: string) {
  let data = fs.readFileSync(path.resolve(__dirname, "mime.json")); //同步方法
  let minmeobj = JSON.parse(data.toString());
  return minmeobj[extname];
}
