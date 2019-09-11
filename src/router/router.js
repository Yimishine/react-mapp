import React,{Component} from 'react'
// import BScroll from 'better-scroll'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Discover from "../view/Discover/Discover";
import Index from '../view/Home/Index';
import SearchType from '../view/Home/SearchType'
// import ScrollToTop from '../../component/ScrollToTop'
let scroll
const style={
    flex: 1,
    overflow:'hidden'
}
export default class Routes extends Component{
    constructor(props){
        super(props)
         this.state ={scroll:null,text:''}

         this.clickF = this.clickF.bind(this)
    }


    clickF(){
        // scroll.scrollTo(0,0)
    }
 
    render(){
        return(
            // 加入这里的操作可以使界面回到顶部，美团淘宝app并不会回到顶部，所以可以不处理
            // <ScrollToTop clickF={this.clickF}>
                <div style={style} className="wrapper" >
                
                    <div style={{height:'100%'}}>
                        <Route path='/Home' exact component={Index}/>
                        <Route path='/Discover' exact component={Discover}/>
                        <Route path='/SearchType'  exact component={SearchType}/>
                    </div> 
                    
                </div>
            // </ScrollToTop>
        )
    }
}