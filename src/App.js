import './App.css';
import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import { Provider } from 'react-redux';
import store from './store';

function App() {

return(
  <Provider store={store}>
  <div>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      {/* <Route exact path="/wall" component={Wall} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/error" component={ErrorPage} />
      <Route exact path="/profile" component={Profile} /> */}
    </Switch>
    </BrowserRouter>
  </div>
  </Provider>
);

}


export default App;
