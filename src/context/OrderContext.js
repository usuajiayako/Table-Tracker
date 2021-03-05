import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../index';

export const OrderContext = createContext();

const sendOrder = finalisedOrder => {
  const tableId = finalisedOrder.tableId;
  const foodIds = finalisedOrder.order.map(order => {
    return order.food_item_id;
  });
  const description = '';
  const foodData = {
    food_items: foodIds,
    description: description
  };
  (async () => {
    try {
      await axios.post(`${baseURL}/api/tables/${tableId}/orders`, foodData);
      console.log('Order sent');
    } catch (error) {
      console.log(error.message, 'Sending order failed');
    }
  })();
};

const OrderContextProvider = props => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      (async () => {
        try {
  
          const orders = await axios.get(`${baseURL}/api/orders`);
          setOrders(orders.data.orders);
        } catch (error) {
          console.log(error.message, 'Error getting orders');
        }
      })();
    }, 3000)
    return () => {
      clearInterval(intervalId)
    }
  }, []);

  const setOrderActive = (tableId, active) => {
    const data = { is_active: active };
    (async () => {
      try {
        await axios.patch(
          `http://localhost:9090/api/tables/${tableId}/orders`,
          data
        );
      } catch (error) {
        console.log(error.message, 'Serving order failed');
      }
    })();
  };

  return (
    <OrderContext.Provider
      value={{ orders, setOrders, sendOrder, setOrderActive }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
