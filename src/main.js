import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect, IndexLink} from 'react-router';
import css from './main.less';
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;

import { Provider } from 'react-redux';
// 引入store文件，下步会创建
import configureStore from './store/ConfigureStore';
// 调用 store 文件中的rootReducer常量中保存的方法
let store = configureStore();

import Login from './components/Login/login';
import Register from './components/Register/register';

import './components/Login/login.less';

export default class Container extends Component{
	constructor(props){
		super(props);
	}

	render() {
        return (<Provider store={store}>
            <div>
                <div className={css.menu}>
                    <div><Link className={css.menuitem} to="login">登录</Link><Link className={css.menuitem} to="register">注册</Link></div>
                </div>
                {this.props.children}
            </div>
        </Provider>)
    }
}


const root = document.getElementById('app');
render((
	<Router history={hashHistory}>
		<Route path="/" component={Container}>
			<IndexRedirect to="/login"  />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</Route>
	</Router>					
),root);