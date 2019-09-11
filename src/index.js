import React,{Component} from 'react'
import {render} from 'react-dom'
import { HashRouter , Route, Link } from "react-router-dom";

import Footer from './view/fotter/Footer'
import Routes from '../src/router/router'


const style = {
    height: '100vh',
    display:' flex',
    flexDirection: 'column'
}

render(
    <div className="page" style={style}>
        <HashRouter  history={history}>
            
                <Routes></Routes>
                <Footer></Footer>
            
        </HashRouter >
    </div>
    ,
    document.getElementById('app')
)