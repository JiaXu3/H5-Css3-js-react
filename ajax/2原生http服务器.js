//导入模块
const http = require('http');
//监听地址和监听端口
const hostname = '127.0.0.1';
const port = 3000;
const sever = http.createServer((req,res) => { //事件回调
    res.statusCode = 200;   //设置http响应状态码
    res.setHeader('Access-Control-Allow-Origin','*');  //设置响应内容格式、
    res.end('Hello World');
})

sever.listen(port,hostname,() => {     //运行服务器
    console.log(`服务监听中，http:${hostname}:${port}`)
})
