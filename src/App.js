import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import Login from './pages/login/index'
import Regist from './pages/register/index'
import store from './store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact  component={Login}></Route>
        <Route path="/regist" exact  component={Regist}></Route>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
