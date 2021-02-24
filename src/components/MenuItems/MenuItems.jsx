import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MenuContext } from '../../context/MenuContext';
import MenuItem from './MenuItem/MenuItem';
import './MenuItems.scss';

const MenuItems = () => {
  const history = useHistory();
  const { starters, mains, desserts, drinks } = useContext(MenuContext);
  const [tableName, setTableName] = useState('');

  useEffect(() => {
    setTableName(history.location.search.substring(1));
  }, [history]);

  return (
    <>
      <h1>Order for Table {tableName}</h1>
      <div className="courses-container">
        <div className="course">
          <h3 className="title">Starters</h3>
          {starters &&
            starters.map((starter) => {
              return <MenuItem key={starter.food_id} food={starter} />;
            })}
        </div>
        <div className="course">
          <h3 className="title">Mains</h3>
          {mains &&
            mains.map((main) => {
              return <MenuItem key={main.food_id} food={main} />;
            })}
        </div>
      </div>
      <div className="courses-container">
        <div className="course">
          <h3 className="title">Desserts</h3>
          {desserts &&
            desserts.map((dessert) => {
              return <MenuItem key={dessert.food_id} food={dessert} />;
            })}
        </div>
        <div className="course">
          <h3 className="title">Drinks</h3>
          {drinks &&
            drinks.map((drink) => {
              return <MenuItem key={drink.food_id} food={drink} />;
            })}
        </div>
      </div>
    </>
  );
};

export default MenuItems;
