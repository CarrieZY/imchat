import React, { Component } from 'react';
import './index.css'

class Nav extends Component {
    render() { 
        return ( 
            <div className='footer'>
                <div className='footer-item'>
                    <img alt='' className='footer-item-img'/>
                    <div className='footer-item-name'>首页</div>
                </div>
                <div className='footer-item'>
                    <img alt='' className='footer-item-img'/>
                    <div className='footer-item-name'>聊天</div>
                </div>
                <div className='footer-item'>
                    <img alt='' className='footer-item-img'/>
                    <div className='footer-item-name'>我的</div>
                </div>
            </div>
         );
    }
}
 
export default Nav;