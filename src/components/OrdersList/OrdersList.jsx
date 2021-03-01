import React, { useContext } from 'react';
import './OrdersList.scss';

import { OrderContext } from '../../context/OrderContext';

function OrdersList() {
  const { orders } = useContext(OrderContext);

  // const dateOptions = {
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   hour12: true,
  // };

  console.log(orders);
  return (
    <>
      <ul className="orders_list">
        {orders.map((order, index) => {
          return (
            <li key={index} className="order_card">
              <h2>Table: {order.table_id}</h2>
              <p className="order_item">Notes: {order.description}</p>
              <div className="food_list">
                <h3>Order:</h3>
                {order.food_items &&
                  order.food_items.map((item, index) => {
                    return (
                      <div className="order_item" key={index}>
                        <p>Food name: {item.name}</p>
                        <p>Course: {item.course}</p>
                      </div>
                    );
                  })}
              </div>
              {window.location.pathname === '/kitchen' && (
                <button>Ready to serve</button>
              )}
              <h3 className="order_time">
                Order time: {order.created_at}
                {/* {new Intl.DateTimeFormat('en-GB', dateOptions).format(
                  order.created_at
                )} */}
              </h3>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default OrdersList;
