import './ViewOrders.scss';
import OrdersList from '../../components/OrdersList/OrdersList';
import OrderContextProvider from '../../context/OrderContext';

import React from 'react';

function ViewOrders() {
  return (
    <>
      <h1>Active orders</h1>
      <OrderContextProvider>
        <OrdersList />
      </OrderContextProvider>
    </>
  );
}

export default ViewOrders;
