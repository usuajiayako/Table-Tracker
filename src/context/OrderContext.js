import React, { createContext, useState, useEffect } from 'react';
import { orderData as ordersArr } from '../data/orders';

export const OrderContext = createContext();

export const OrderContextProvider = (props) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersArr);
  }, []);

  return (
    <OrderContext.Provider value={{ orders }}>
      {props.children}
    </OrderContext.Provider>
  );
};
