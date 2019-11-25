import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import Login from './pages/login/index'
import Regist from './pages/register/index'
import Home from './pages/home/index'
import store from './store';
import UserInfe from './component/userinfo/userinfo'



function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <UserInfe></UserInfe>
        <Route path="/login" exact  component={Login}></Route>
        <Route path="/regist" exact  component={Regist}></Route>
        <Route path="/home" exact  component={Home}></Route>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
