import './App.css';
import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import MerchantLogin from './components/merchantLogin';
import PatronMain from './components/patronMain';
import MerchantMain from './components/merchantMain';
import MerchantReg from './components/merchantReg';
import PatronReg from './components/patronReg'


function App() {

return(
  <Provider store={store}>
  <div>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/merchantlogin" component={MerchantLogin} />
      <Route exact path="/patronmain" component={PatronMain} />
      <Route exact path="/merchantmain" component={MerchantMain} />
      <Route exact path="/merchantreg" component={MerchantReg} />
      <Route exact path="/patronreg" component={PatronReg} />
    </Switch>
    </BrowserRouter>
  </div>
  </Provider>
);

}


export default App;
