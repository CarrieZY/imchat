import React, { Component } from 'react';
import { Button ,Input} from 'antd';
import 'antd/dist/antd.css'
class Regist extends Component {
    render() { 
        return ( 
            <div>
                <Input placeholder="请设置用户名" style={{width:200,margin:10}}></Input><br/>
                <Input placeholder="请设置密码" style={{width:200,margin:10}}></Input><br/>
                <Button style={{width:200}}>注册</Button>
            </div>
         );
    }
}
 
export default Regist;