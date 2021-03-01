import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MenuContext } from '../../context/MenuContext';
import { OrderContext } from '../../context/OrderContext';
import MenuItem from './MenuItem/MenuItem';
import Order from '../Order/Order';
import './MenuItems.scss';

const MenuItems = () => {
  const history = useHistory();
  const { starters, mains, desserts, drinks } = useContext(MenuContext);
  const { sendOrder } = useContext(OrderContext);
  // const { allFood } = useContext(MenuContext);
  const [tableId, setTableId] = useState('');
  const [order, setOrder] = useState([]);

  console.log(order);

  useEffect(() => {
    setTableId(history.location.search.substring(1));
  }, [history]);

  // useEffect(() => {
  // }, []);

  const handleAddRemove = (food, num) => {
    if (num === 1) {
      setOrder([...order, food]);
    } else {
      const newArr = [...order];
      const index = newArr.indexOf(food);
      if (index === -1) return;
      newArr.splice(index, 1);
      setOrder(newArr);
    }
  };

  const submitOrder = () => {
    const finalisedOrder = {
      tableId: tableId,
      order: order,
    };
    sendOrder(finalisedOrder);
  };

  return (
    <>
      <h1>Order for Table {tableId}</h1>
      <div className="courses-container">
        <div className="course">
          <h3 className="title">Starters</h3>
          {starters &&
            starters.map((starter, index) => {
              return (
                <MenuItem
                  key={index}
                  food={starter}
                  handleAddRemove={handleAddRemove}
                  default
                />
              );
            })}
        </div>
        <div className="course">
          <h3 className="title">Mains</h3>
          {mains &&
            mains.map((main, index) => {
              return (
                <MenuItem
                  key={index}
                  food={main}
                  handleAddRemove={handleAddRemove}
                />
              );
            })}
        </div>
      </div>
      <div className="courses-container">
        <div className="course">
          <h3 className="title">Desserts</h3>
          {desserts &&
            desserts.map((dessert, index) => {
              return (
                <MenuItem
                  key={index}
                  food={dessert}
                  handleAddRemove={handleAddRemove}
                />
              );
            })}
        </div>
        <div className="course">
          <h3 className="title">Drinks</h3>
          {drinks &&
            drinks.map((drink, index) => {
              return (
                <MenuItem
                  key={index}
                  food={drink}
                  handleAddRemove={handleAddRemove}
                />
              );
            })}
        </div>
      </div>
      <h3>Order:</h3>
      <Order order={order} />
      <button onClick={submitOrder}>Submit Order</button>
    </>
  );
};

export default MenuItems;
