import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import '../../../css/index/SearchType.less'

export default class SearchType extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="search-page">
                <div className="search-cont">
                    <img src={require('../../../image/icon/add-more.png')} className="search-img"/>
                    <input className="search-btn"/>
                    <NavLink exact to="/home" className="cancel">
                         取消
                    </NavLink>
                </div>
                <div className="most-search search">
                    <p className="title">热门搜索</p>
                    <div className="tip-box">
                        <span>北京大学</span>
                        <span>清华大学</span>
                        <span>北京欢乐谷</span>
                        <span>长城</span>
                        <span>世纪佳缘</span>
                        <span>羊蝎子</span>
                    </div>
                </div>
                <div className="history-search search">
                    <p className="title">历史搜索</p>
                    <div className="tip-box">
                        <span>家居装饰</span>
                        <span>欢乐谷</span>
                        <span>降龙十八掌</span>
                        <span>一阳指</span>
                        <span>移花接木</span>
                        <span>九阴真经</span>
                        <span>太乙真人</span>
                        <span>峨眉</span>
                        <span>华山</span>
                        <span>灭绝师太</span>
                        <span>何仙姑</span>
                    </div>
                </div>
            </div>
        )
    }
}



