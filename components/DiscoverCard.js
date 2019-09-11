import React,{Component} from "react"
import AutoResponsive from 'autoresponsive-react'

import "./DiscoverCard.less"



export default class DiscoverCard extends Component{
    constructor(props){
        super(props)
        this.state={
            itemHeights:[],
            itemWidth:0
        }
        
        this.initStyle = this.initStyle.bind(this)
        this.getAutoResponsiveProps = this.getAutoResponsiveProps.bind(this)
        this.getDom  = this.getDom.bind(this)
        // this.getHeight = this.getHeight.bind(this)
        this.index = 1
        
        // this.saveRef = ref => {this.refDom = ref};
    }

    componentWillMount(){
        this.getDom()
    }

    componentDidMount(){
        console.log("oooo")
    }

     async componentDidUpdate(prevProps, prevState){
        
        if(this.index){
            this.initStyle()
            this.index=0
        }

    }

    shouldComponentUpdate(){
        return true
    }

    render(){
        let arrayList = this.getDom()
        let itemWidth = parseInt(document.body.clientWidth-30-10)/2
        return (
            <div className="content"> 
            
                    <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
                    {
                        arrayList.map(function(i,index) {
                            return <div  style={{width:itemWidth,height:this.state.itemHeights[index]}} key={index} ref={`discoverCard${index}`}>{i}</div>;
                        }, this)
                        }
                </AutoResponsive>
            
                
            </div>
            
        )
        
    }


    getAutoResponsiveProps() {
        return {
          itemMargin: 10,
          containerWidth: document.body.clientWidth,
          itemClassName: 'item',
        //   gridWidth:85,
          transitionDuration: '.2'
        }
    }

    getDom(){
        return this.props.recommondData && this.props.recommondData.map((item,index)=>{
            return (
                <div className="box-cont" key={index}  >
                    <div className="img-cont" style={{backgroundImage:`url(${item.img})`}}>
                    </div>
                        <p>{item.desc}</p>
                    <span className="bottom-per"><span className="name"><img src={item.img} alt=""/>{item.name}||{index}</span><span>{item.num}</span></span>
                </div>
            )
        },this)
    }
    
    // getHeight(index){
    //     if(index>1){
    //         let height=0,oldIndex=[],evenIndex=[]
    //     //    console.log(Math.ceil((this.state.itemHeights.length-(index+1))/2))
    //        console.log('index:'+index)
    //     if(index%2===0){
    //         oldIndex.push(this.state.itemHeights[index])
    //        }else{
    //         evenIndex.push(this.state.itemHeights[index])
    //        }

    //        console.log(oldIndex)
    //        console.log(evenIndex)

    //        for(let i=0;i<oldIndex.length;i++){
    //           height +=oldIndex[i]
    //        }

    //        for(let i=0;i<evenIndex.length;i++){
    //         height +=evenIndex[i]
    //      }
            
    //         height += 10*parseInt(index/2)   // this.state.itemHeights[index]*parseInt(index/2)+

    //         console.log('height'+height)

    //         return height
    //     }else{
    //         return ''
    //     }
        
    // }
    initStyle(){
        let itemHeights=[]
        for(let key in this.refs){
            // console.log(this.refs[key].offsetHeight)
            if(this.refs[key].offsetHeight){
                itemHeights.push(this.refs[key].offsetHeight)
            }
        }
        if(itemHeights.length){
            this.setState({itemHeights})
        }
        //  this.itemHeight = this.refDom.offsetHeight
        //  this.setState({itemHeight})  top: index>1?this.state.itemHeights[index]*parseInt(index/2)+10*parseInt(index/2):'',
        

        // this.setState({itemHeighs:itemArray})

    }
}