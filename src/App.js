import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import AdminPage from './containers/AdminPage/AdminPage';
import CashierPage from './containers/CashierPage/CashierPage';
import KitchenPage from './containers/KitchenPage/KitchenPage';
import WaiterPage from './containers/WaiterPage/WaiterPage';

const App = () => {
  const routes = (
    <Switch>
      <Route path='/admin' component={AdminPage} />
      <Route path='/waiter' component={WaiterPage} />
    </Switch>
  );

  return <React.Fragment>{routes}</React.Fragment>;
};

export default App;
