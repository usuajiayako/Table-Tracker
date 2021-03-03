import React, { useContext } from 'react';
// import io from 'socket.io-client';
import './OrdersList.scss';

import { OrderContext } from '../../context/OrderContext';

// const socket = io('http://localhost:9090');

function OrdersList() {
  const { orders } = useContext(OrderContext);

  // console.log(orders, 'orders');

  // useEffect(() => {
  //   const name = 'melissa';
  //   socket.on('new-order', (name) => {
  //     console.log(name);
  //   });
  //   socket.emit('new-order', name);

  //   socket.on('order', (orders) => {
  //     console.log(orders);
  // });
  // });

  return (
    <>
      <ul className="orders_list">
        {orders.map((order, index) => {
          const timeRegex = /T(\d{2}:\d{2})/;
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
                        <p>Food: {item.name}</p>
                        <p>Course: {item.course}</p>
                      </div>
                    );
                  })}
              </div>
              {window.location.pathname === '/kitchen' && (
                <button>Ready to serve</button>
              )}
              <h3 className="order_time">
                Order time: {order.created_at.match(timeRegex)[1]}
              </h3>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default OrdersList;
