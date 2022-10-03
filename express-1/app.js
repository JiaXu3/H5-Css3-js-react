//导入express
const express = require('express');
//创建应用
const app = express();
//设置路由
// app.get('/',(req,res) => {
//     //设置响应头，允许跨域
//     res.setHeader('Access-Control-Allow-Origin','*')
//     res.setHeader('Access-Control-Allow-Headers','*')
//     //输出响应
//     res.send('ashjdahsd')
// });

app.all('/axios',(req,res) => {
    //设置响应头，允许跨域
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','*')
    //输出响应
    res.send('ashjdahsd')
});
//路由参数，路由参数用于捕获 URL 中各位置的值。捕获的值将填充到 req.params 对象中，并将路由
//路径中指定的 route 参数名称作为 req.params 对象的键
app.get('/users/:uId/timelines/:timelineId',(req,res) => {
    res.json(req.params)
})

//设置多个路由函数，next()
app.get('/more',(req,res,next) => {
    console.log('jdhds');
    next();
},(req,res) => {
    res.send('第二页');
}
)

//开始监听
app.listen(8080,() => {
    console.log('8080监听');
})