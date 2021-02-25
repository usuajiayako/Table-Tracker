import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MenuContext } from '../../context/MenuContext';
import MenuItem from './MenuItem/MenuItem';
import Order from '../Order/Order';
import './MenuItems.scss';

const MenuItems = () => {
  const history = useHistory();
  const { starters, mains, desserts, drinks } = useContext(MenuContext);
  const [tableName, setTableName] = useState('');
  const [order, setOrder] = useState([]);

  useEffect(() => {
    setTableName(history.location.search.substring(1));
  }, [history]);

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
      tableName: tableName,
      order: order,
    };
    console.log(finalisedOrder);
  };

  return (
    <>
      <h1>Order for Table {tableName}</h1>
      <button onClick={submitOrder}>Submit Order</button>
      <div className="courses-container">
        <div className="course">
          <h3 className="title">Starters</h3>
          {starters &&
            starters.map((starter) => {
              return (
                <MenuItem
                  key={starter.food_id}
                  food={starter}
                  handleAddRemove={handleAddRemove}
                />
              );
            })}
        </div>
        <div className="course">
          <h3 className="title">Mains</h3>
          {mains &&
            mains.map((main) => {
              return (
                <MenuItem
                  key={main.food_id}
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
            desserts.map((dessert) => {
              return (
                <MenuItem
                  key={dessert.food_id}
                  food={dessert}
                  handleAddRemove={handleAddRemove}
                />
              );
            })}
        </div>
        <div className="course">
          <h3 className="title">Drinks</h3>
          {drinks &&
            drinks.map((drink) => {
              return (
                <MenuItem
                  key={drink.food_id}
                  food={drink}
                  handleAddRemove={handleAddRemove}
                />
              );
            })}
        </div>
      </div>
      <Order order={order} />
    </>
  );
};

export default MenuItems;
