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
      <ul className="orders_list">
        {orders.map((order) => {
          return (
            <li key={order.order_id} className="order_card">
              <h2>Table: {order.table_id}</h2>
              <p className="order_item">Notes: {order.description}</p>
              <div className="food_list">
                <h3>Order:</h3>
                {order.food_items.map((item) => {
                  return (
                    <div
                      className="order_item"
                      key={order.food_items.indexOf(item)}
                    >
                      <p>Course: {item.course}</p>
                      <p>Food item: {item.name}</p>
                    </div>
                  );
                })}
              </div>
              {window.location.pathname === '/kitchen' && (
                <button>Ready to serve</button>
              )}
              <h3 className="order_time">
                Order time:
                {new Intl.DateTimeFormat('en-GB', dateOptions).format(
                  order.created_at
                )}
              </h3>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default OrdersList;
