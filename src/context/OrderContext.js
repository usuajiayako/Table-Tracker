import React, { createContext, useState, useEffect } from 'react';
import { orderData as ordersArr } from '../data/orders';

export const OrderContext = createContext();

const sendOrder = (finalisedOrder) => {
  console.log(finalisedOrder);
};

const OrderContextProvider = (props) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersArr);
  }, []);

  return (
    <OrderContext.Provider value={{ orders, sendOrder }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
