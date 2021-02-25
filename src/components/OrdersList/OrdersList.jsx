import React, { useContext } from 'react';

import { OrderContext } from '../../context/OrderContext';

function OrdersList() {
  const { orders } = useContext(OrderContext);

  return (
    <>
      <h2>Active Orders</h2>
      <ul>
        {orders.map((order) => {
          return (
            <li key={order.order_id}>
              <p>Table: {order.table_id}</p>
              <p>Notes: {order.description}</p>
              <div className="foodList">
                {order.food_items.map((item) => {
                  return (
                    <>
                      <p>Course: {item.course}</p>
                      <p>Food item: {item.name}</p>
                    </>
                  );
                })}
              </div>
              <p>Order time: {order.create_at}</p>
              <button>Ready to serve</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default OrdersList;
