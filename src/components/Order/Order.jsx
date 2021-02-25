import React from 'react';

import './Order.scss';

const Order = ({ order }) => {
  return order.map((item, index) => (
    <div className="food-item" key={index}>
      <p className="name">{item.name}</p>
      <p>£{item.price}</p>
    </div>
  ));
};

export default Order;
