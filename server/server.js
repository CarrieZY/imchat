// 引入express模块
const express=require('express')
// 新建app
const app=express()
// res.send()和res.json必须掌握的
// get()里面有两个参数  第一个根路径  第二个是回调后的函数 req请求  res响应
app.get('/',function(req,res){
    res.send('<h1>hello world</h1>')
})
// res.json可以直接返回json数据
app.get('/data',function(req,res){
    res.json({name:'imooc',age:'19',type:'boys'})
})
// 监听3000端口  第二个参数是监听成功之后的回调函数
app.listen(9090,function(){
    console.log('node监听成功')
})

// app.get()  发送get请求  app.post()  发送post请求