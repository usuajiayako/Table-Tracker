import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { orderData as ordersArr } from '../data/orders';

export const OrderContext = createContext();

const sendOrder = (finalisedOrder) => {
  console.log(finalisedOrder);
};

const OrderContextProvider = (props) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const orders = await axios.get('http://localhost:9090/api/orders');
        setOrders(orders.data.orders);
      } catch (error) {
        console.log(error.message, 'Error getting orders');
      }
    })();
  }, []);

  return (
    <OrderContext.Provider value={{ orders, sendOrder }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
