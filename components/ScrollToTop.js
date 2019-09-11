import React, { Component } from 'react';
    import { Route, withRouter } from 'react-router-dom';

    class ScrollToTop extends Component {
        
        componentDidUpdate() {   //可以“监听”到路由的切换（在组件完成更新后立即调用。在初始化时不会被调用）
            this.props.clickF()      // 通过调用父组件的方法修改父组件的数据
        }
        render() {
            return this.props.children
        }
    }
    export default withRouter(ScrollToTop);