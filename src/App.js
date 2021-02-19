import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import AdminPage from './containers/AdminPage/AdminPage';
import CashierPage from './containers/CashierPage/CashierPage';
import KitchenPage from './containers/KitchenPage/KitchenPage';
import WaiterPage from './containers/WaiterPage/WaiterPage';
import SigninPage from './containers/SigninPage/SigninPage';

const App = () => {
  const routes = (
    <Switch>
      <Route path='/' component={SigninPage} />
      <Route path='/admin' component={AdminPage} />
      <Route path='/waiter' component={WaiterPage} />
      <Route path='/cashier' component={CashierPage} />
      <Route path='/kitchen' component={KitchenPage} />
      <Redirect to='/' exact/>
    </Switch>
  );

  return <React.Fragment>{routes}</React.Fragment>;
};

export default App;
