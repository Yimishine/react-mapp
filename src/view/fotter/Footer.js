import React, { Component } from 'react';
import { BrowserRouter , Route, NavLink } from "react-router-dom";
import './Footer.less'
import homeImg2 from '../../../image/icon/home2-1.png'
import homeImg3 from '../../../image/icon/home3-1.png'
import homeImg4 from '../../../image/icon/home4-1.png'

import '../../router/router'

export default class Footer extends Component{
    render(){
        return(
            <div className="footer-cont">
                <div className="img-cont">
                    <NavLink to="/Home" className="home">
                        <div className="img-box">
                            <div className="img"></div>
                            <p>首页</p>
                        </div>
                    </NavLink>
                    <NavLink to="/Discover" className="discover">
                        <div className="img-box">
                        <div className="img"></div>
                            <p>发现</p>
                        </div>
                    </NavLink>
                            
                            
                    <div className="img-box">
                        <img src={homeImg3}/>
                        <p>订单</p>
                    </div>
                    <div className="img-box">
                        <img src={homeImg4}/>
                        <p>我的</p>
                    </div>
                </div>
            </div>
        )
    }
}