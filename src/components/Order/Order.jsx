import React from 'react';

const Order = ({ order }) => {
  return order.map((item, index) => (
    <div key={index}>
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>
  ));
};

export default Order;
