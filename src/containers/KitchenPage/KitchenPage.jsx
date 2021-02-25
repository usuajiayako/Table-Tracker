import './KitchenPage.scss';
import OrdersList from '../../components/OrdersList/OrdersList';
import { OrderContextProvider } from '../../context/OrderContext';

import React from 'react';

const KitchenPage = () => {
  return (
    <>
      <h1>Active orders</h1>
      <OrderContextProvider>
        <OrdersList />
      </OrderContextProvider>
    </>
  );
};

export default KitchenPage;
