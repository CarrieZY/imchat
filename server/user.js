const express = require('express')
const Router = express.Router()  //路由对象
 
Router.get('/info', function(req, res){
    // 判断用户有没有cookie  然后返回对应的用户信息、用户身份
    return res.json({code:1}) //测试   0是存在用户信息  
})
 
module.exports = Router  //对外暴露接口