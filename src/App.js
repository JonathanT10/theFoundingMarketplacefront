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
import PatronReg from './components/patronReg';
import MerchantProd from './components/merchProduct';
import MerchProfile from './components/merchProfile';
import GoogleMaps from './components/googleMaps';
import ProductImg from './components/productImg';
import AdminLogin from './components/adminLogin';
import Cart from './components/cart';
import ReqHigh from './components/reqHigh';
import AdminMain from './components/adminMain';
import PastOrders from './components/pastOrders';
import PatMerchProfile from './components/patronMerch'


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
      <Route exact path="/merchproduct" component={MerchantProd} />
      <Route exact path="/merchprofile" component={MerchProfile} />
      <Route exact path="/googlemaps" component={GoogleMaps} />
      <Route exact path="/productimg" component={ProductImg} />
      <Route exact path="/adminlogin" component={AdminLogin} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/reqhigh" component={ReqHigh} />
      <Route exact path="/adminmain" component={AdminMain} />
      <Route exact path="/pastorders" component={PastOrders} />
      <Route exact path="/patronmerch" component={PatMerchProfile} />
    </Switch>
    </BrowserRouter>
  </div>
  </Provider>
);

}


export default App;
