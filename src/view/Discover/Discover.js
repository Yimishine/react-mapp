import React,{Component} from 'react'
import BScroll from 'better-scroll'
import DiscoverCard from '../../../components/DiscoverCard'
import Swiper from 'Swiper'
import './Discover.less'
import '../../../swiper/dist/css/swiper.min.css'
// import {Swiper,Pagination} from '../../../swiper/dist/js/swiper.esm.js'

export default class Discover extends Component{
    constructor(props){
        super(props)
        this.state={
            recommondData:[],
            recommondNewData:null,
        }
        this.fetchData = this.fetchData.bind(this)
    }

    async componentWillMount(){
        await this.fetchData()

    }
    async componentDidMount(){
        scroll = new BScroll(this.refs.discover,{
            scrollY: true,
            scrollX: true,
            probeType: 3,
            click: true,
        })
        let mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            pagination : {
                el: '.swiper-pagination',
                clickable :true,
                renderBullet: function (index, className) {
                    let text
                    switch(index){
                      case 0:text='推荐';break;
                      case 1:text='美食';break;
                      case 2:text='丽人';break;
                      case 3:text='玩乐';break;
                      case 4:text='旅行';break;
                      case 5:text='电影';break;
                    }
                    return '<span class="' + className + '">' + text + '</span>';
                  },
            }
        })

        
    }     
    
    render(){
        return(
            <div className="discover-page" >
                    <div className="top-fixed">
                        <p className="title">发现</p>
                        <div className="swiper-container">
                            <div className='swiper-pagination'>
                            
                            </div>
                        </div>
                    </div>
                   
                    <div className="swiper-container" style={{width:'100%',flex:1}}>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"  ref="discover">
                                <DiscoverCard recommondData={this.state.recommondData} ></DiscoverCard>
                            </div>
                            <div className="swiper-slide">美食</div>
                            <div className="swiper-slide">丽人</div>
                            <div className="swiper-slide">玩乐</div>
                            <div className="swiper-slide">旅行</div>
                            <div className="swiper-slide">电影</div>
                 
                        </div>
                        
                    </div>
            </div>
        )
    }

    async fetchData(){
       await fetch('../../../dist/recommend.json',{
            method:'GET',
            headers:{
            'Content-Type':'application/json;charset=UTF-8'
            },
            mode:'cors',
            cache:'default'
        })
        .then(res =>res.json())
        .then(data=>{
            this.setState({recommondData:data.data})

            // console.log(this.state.recommondData)
        }).catch(err=>{
            console.error(err)
        })
    }

 
}