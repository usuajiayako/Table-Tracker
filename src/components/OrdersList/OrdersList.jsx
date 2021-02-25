import React, { useContext } from 'react';
import './OrdersList.scss';

import { OrderContext } from '../../context/OrderContext';

function OrdersList() {
  const { orders } = useContext(OrderContext);

  const dateOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  return (
    <>
      <h2>Active Orders</h2>
      <ul className="orders_list">
        {orders.map((order) => {
          return (
            <li key={order.order_id} className="order_card">
              <strong>Table: {order.table_id}</strong>
              <p>Notes: {order.description}</p>
              <div className="food_list">
                <strong>Order:</strong>
                {order.food_items.map((item) => {
                  return (
                    <>
                      <p>Course: {item.course}</p>
                      <p>Food item: {item.name}</p>
                    </>
                  );
                })}
              </div>
              <p>
                Order time:{' '}
                {new Intl.DateTimeFormat('en-GB', dateOptions).format(
                  order.created_at
                )}
              </p>
              <button>Ready to serve</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default OrdersList;
