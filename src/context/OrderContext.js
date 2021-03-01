import React, { createContext, useState, useEffect } from 'react';
import { orderData as ordersArr } from '../data/orders';
import axios from 'axios';

export const OrderContext = createContext();

const sendOrder = (finalisedOrder) => {
  const tableId = finalisedOrder.tableId;
  const foodIds = finalisedOrder.order.map((order) => {
    return order.food_item_id;
  });
  const description = '';
  const foodData = {
    food_items: foodIds,
    description: description,
  };
  (async () => {
    try {
      await axios.post(
        `http://localhost:9090/api/tables/${tableId}/orders`,
        foodData
      );
      console.log('Order sent');
    } catch (error) {
      console.log(error.message, 'Sending order failed');
    }
  })();
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
