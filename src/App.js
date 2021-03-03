import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';
import { AuthProvider } from './context/AuthContext';

import Header from './components/Header/Header';
import AllUsersPage from './containers/AllUsersPage/AllUsersPage';
import MenuPage from './containers/MenuPage/MenuPage';
import NewUserPage from './containers/NewUserPage/NewUserPage';
import NewFoodPage from './containers/NewFoodPage/NewFoodPage';
import CashierPage from './containers/CashierPage/CashierPage';
import KitchenPage from './containers/KitchenPage/KitchenPage';
import WaiterPage from './containers/WaiterPage/WaiterPage';
import SigninPage from './containers/SigninPage/SigninPage';
import ViewOrders from './containers/ViewOrders/ViewOrders';
import EditFoodPage from './containers/EditFoodPage/EditFoodPage';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={SigninPage} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/admin" exact component={AllUsersPage} />
      <Route path="/admin/new-user" component={NewUserPage} />
      <Route path="/admin/new-food" component={NewFoodPage} />
      <Route path="/admin/edit-food" component={EditFoodPage} />
      <Route path="/waiter" component={WaiterPage} />
      <Route path="/cashier" component={CashierPage} />
      <Route path="/kitchen" component={KitchenPage} />
      <Route path="/view-orders" component={ViewOrders} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <AuthProvider>
      <Header />
      {routes}
    </AuthProvider>
  );
};

export default App;
