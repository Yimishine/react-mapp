import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import BScroll from 'better-scroll'
import  '../../../css/index/index.less'
import image from '../../../image/icon/header.png'
import addMore from '../../../image/icon/add-more.png'
import bigIcon1 from '../../../image/icon/1-1.png'
import bigIcon2 from '../../../image/icon/1-2.png'
import bigIcon3 from '../../../image/icon/1-3.png'
import bigIcon4 from '../../../image/icon/1-4.png'
import bigIcon5 from '../../../image/icon/1-5.png'
import smallIcon1 from '../../../image/icon/2-1.png'
import smallIcon2 from '../../../image/icon/2-2.png'
import smallIcon3 from '../../../image/icon/2-3.png'
import smallIcon4 from '../../../image/icon/2-4.png'
import smallIcon5 from '../../../image/icon/2-5.png'
import smallIcon6 from '../../../image/icon/2-6.png'
import smallIcon7 from '../../../image/icon/2-7.png'
import smallIcon8 from '../../../image/icon/2-8.png'
import smallIcon9 from '../../../image/icon/2-9.png'
import sliderImg1 from '../../../image/images/slider1.png'
import sliderImg2 from '../../../image/images/slider2.png'
import sliderImg3 from '../../../image/images/slider3.png'


let imgTimer = null

export default class Index extends Component {
    constructor(props){
            super(props)
    }
     componentDidMount(){
       let scroll = new BScroll(this.refs.index,{
            scrollY: true,
            probeType: 3,
            click: true,
        })
        // this.setState({scrollY:scrollY})
    }

    render() {
        return (
            <div className="page"  style={{height:'100%'}}>
                 <TopSearch></TopSearch>
                <div ref="index"  style={{height:'100%'}}>
                   <div>
                     <IconBigEntry></IconBigEntry>
                        <IconSmallEntry></IconSmallEntry>
                        <ImgSlider></ImgSlider>
                        <Ads></Ads>
                   </div>
                    
                </div>
             </div>
        );
    }
}

class TopSearch extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="top-search">
                <div className="header-img">
                    <img src={image}/>
                </div>
                <div className="address">
                    <span>北京</span>
                    <span className="today-num">阴22°</span>
                </div>
                <NavLink exact to="/SearchType" className="search-input">
                {/* <div className="search-input"> */}
                     羊肉串川湘菜(外卖满减)
                {/* </div> */}
                </NavLink>
              
                <div className="add-more">
                    <img src={addMore}/>
                </div>
            </div>
        )
    }
}

class IconBigEntry extends Component{
    render(){
        return(
            <div className="icon-big-entry">
                <div className="icon-cont">
                    <div className="icon-box icon-box1">
                    <img src={bigIcon1}/>
                    </div>
                    <p>美食</p>
                </div>
                <div className="icon-cont">
                    <div className="icon-box icon-box2">
                    <img src={bigIcon2}/>
                    </div>
                    <p>电影/演出</p>
                </div>
                <div className="icon-cont">
                    <div className="icon-box icon-box3">
                    <img src={bigIcon3}/>
                    </div>
                    <p>酒店住宿</p>
                </div>
                <div className="icon-cont">
                    <div className="icon-box icon-box4">
                    <img src={bigIcon4}/>
                    </div>
                    <p>休闲娱乐</p>
                </div>
                <div className="icon-cont">
                    <div className="icon-box icon-box5">
                    <img src={bigIcon5}/>
                    </div>
                    <p>外卖</p>
                </div>
            </div>
        )
    }
}

class IconSmallEntry extends Component{
    render(){
        return(
            <div className="icon-small-entry">
                <div className="icon-li-cont">
                    <div className="icon-box">
                        <img src={smallIcon1}/>
                        <p>打车</p>
                    </div>
                    <div className="icon-box">
                        <img src={smallIcon1}/>
                        <p>结婚/摄影</p>
                    </div>
                    <div className="icon-box">
                        <img src={smallIcon2}/>
                        <p>周边游/旅游</p>
                    </div>
                    <div className="icon-box">
                        <img src={smallIcon3}/>
                        <p>超市/生鲜</p>
                    </div>
                    <div className="icon-box">
                        <img src={smallIcon4}/>
                        <p>跑腿/代购</p>
                    </div>
                </div>
                <div className="icon-li-cont">
                    <div className="icon-box">
                        <img src={smallIcon5}/>
                        <p>景点/门票</p>
                    </div>
                    <div className="icon-box">
                        <img src={smallIcon6}/>
                        <p>丽人/美发</p>
                    </div>
                    <div className="icon-box">
                        <img src={smallIcon7}/>
                        <p>签到领现金</p>
                    </div>
                    <div className="icon-box">
                        <img src={smallIcon8}/>
                        <p>分享赚10元</p>
                    </div>
                    <div className="icon-box">
                        <img src={smallIcon9}/>
                        <p>更多</p>
                    </div>
                </div>
            </div>
        )
    }
}

class ImgSlider extends Component{
    constructor(props){
        super(props)
    }
    componentWillUnmount(){
        clearInterval(imgTimer)

    }

    render(){
        let i=0
        imgTimer = setInterval(()=>{
            i++
            if(i>2){
                i=0
            }
           this.refs.imgCont.style.left=`${-i*345}px`
        },2000)
        
        return(
            <div className="img-slider">
                <div className="img-cont" >
                    <div className="img-box" ref="imgCont">
                        <img src={sliderImg1}/>
                        <img src={sliderImg2}/>
                        <img src={sliderImg3}/>
                    </div>
                    
                </div>
                <div className="li-dot">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}

class Ads extends Component{
        constructor(props){
            super(props)
            this.state = {
                adsListData:[]
            }
        }
        componentDidMount  (){
                //模拟数据请求
                fetch('../../../dist/index.json',{
                    method:'GET',
                    headers:{
                    'Content-Type':'application/json;charset=UTF-8'
                    },
                    mode:'cors',
                    cache:'default'
                })
                .then(res =>res.json())
                .then(data=>{
                    // console.log(data)
                    this.setState({adsListData:data.data})
                }).catch(err=>{
                    console.error(err)
                })
        }
        shouldComponentUpdate(){
            return true
        }
        
    render(){
        let adsState = this.state.adsListData
        let Items
        if(this.state.adsListData.length){
           Items =  adsState.length&& adsState.map((item,index)=>{
                return (
                    <div className="ads-container" key={index}>
                        <p className="title">
                            {item.title}
                            <span>
                                {/* <img src={}/> */}
                            </span>
                        </p>
                        <p className="num-cont">
                            <span className="remark-num">{item.percent}分<span>￥{item.price}</span></span>
                            <span className="distances">{item.distances}km</span>
                        </p>
                        <p className="desc"><span className="tip">预付</span>{item.desc}</p>
                        <div className="tag-list">
                        {
                           item.tags.map((item,index)=>{
                               return (
                                <span key={index}>{item}</span>
                               
                               )
                           })
                        }
                        </div>
                        
                        <div className="img-list">
                            <div className="img-box img1">

                            </div>
                            <div className="img-box img2">

                            </div>
                            <div className="img-box img3">

                            </div>
                        
                        </div>
                    </div>
                )
            })
        }
        
        return(
           <div>
               {Items}
            </div>
        )
    }
}
