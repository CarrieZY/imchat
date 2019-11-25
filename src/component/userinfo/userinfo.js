import React, { Component } from 'react';
import axios from 'axios'
import {withRouter} from "react-router-dom";

class Userinfo extends Component {
    componentDidMount(){
        console.log(this.props.location.pathname)
        // 对当前的路由已经是注册页了  或者是已经是 登录页的情况下
        const publicList = ['/login', 'register']
        const pathname = this.props.location.pathname;
        if(publicList.indexOf(pathname) > -1){
                return null
        }
        // 获取用户信息
        axios.get('/user/info',{}).then(res=>{
            // 判断是否登录 
            // 判断用户的身份
            // 判断用户是否完善信息 
             if(res.status == 200){
                //  设置状态码  code=0的时候  是可以通过的
                 if(res.data.code == 0){
                    // 是有用户信息
                    this.props.history.push("/home");
                    // 判断用户信息的身份 页面显示不同的效果
                 }else{
                    //  普通路由打印出来是undefined
                    console.log('您需要先登录')
                    this.props.history.push("/login");
                 }
             }
        })
    }
    render() { 
        return (
            <div>
                {/* 用户信息 */}
            </div>
          );
    }
}

export default withRouter(Userinfo);
