import React, { Component } from 'react';
import { Button ,Input} from 'antd';
import 'antd/dist/antd.css'
import {Link} from 'react-router-dom'
import '../login/index.css'

class Regist extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            pwd:'',
            pwdd:''
        }
        this.handleClick=this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <div>
                <Input placeholder="请设置用户名"   onChange={v => this.handleChange('username',v)} style={{width:200,margin:10}}></Input><br/>
                <Input placeholder="请设置密码"  onChange={v => this.handleChange('pwd',v)} style={{width:200,margin:10}}></Input><br/>
                <Input placeholder="请重复输入密码" onChange={v => this.handleChange('pwdd', v)}   style={{width:200,margin:10}}></Input><br/>
                <Button style={{width:200}} type="primary" onClick={this.handleClick}>注册</Button>
                <Link to='/login'>
                <div className='text'>已有账号,去登录></div>
                </Link>
            </div>
         );
    }

    handleChange(key,val){
        this.setState({
            [key]: val.target.value
        })
    }

    handleClick(){
        console.log(this.state)
    }
}
 
export default Regist;