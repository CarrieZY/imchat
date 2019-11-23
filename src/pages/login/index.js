import React, { Component } from 'react'
import {Input, Button } from 'antd';
import 'antd/dist/antd.css'
import './index.css'
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="App">
                <Input placeholder="请输入用户名" style={{width:200,margin:10}}></Input><br/>
                <Input placeholder="请输入密码" style={{width:200,marginBottom:10}}></Input><br/>
                <Button type="primary" style={{width:200}}>登录</Button><br/>
                <Link to='/regist'>
                <div className='text'>还没有账号,马上注册></div>
                </Link>
            </div>
         );
    }
}
 
export default Login;