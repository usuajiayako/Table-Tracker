import React, { useContext } from 'react';

import { MenuContext } from '../../context/MenuContext';
import MenuItem from './MenuItem/MenuItem';
import './MenuItems.scss';

const MenuItems = () => {
  const { starters, mains, desserts, drinks } = useContext(MenuContext);

  return (
    <>
      <div className="course-container">
        <h3 className="title">Starters</h3>
        {starters &&
          starters.map((starter) => {
            return <MenuItem key={starter.food_id} food={starter} />;
          })}
      </div>
      <div className="course-container">
        <h3 className="title">Mains</h3>
        {mains &&
          mains.map((main) => {
            return <MenuItem key={main.food_id} food={main} />;
          })}
      </div>
      <div className="course-container">
        <h3 className="title">Desserts</h3>
        {desserts &&
          desserts.map((dessert) => {
            return <MenuItem key={dessert.food_id} food={dessert} />;
          })}
      </div>
      <div className="course-container">
        <h3 className="title">Drinks</h3>
        {drinks &&
          drinks.map((drink) => {
            return <MenuItem key={drink.food_id} food={drink} />;
          })}
      </div>
    </>
  );
};

export default MenuItems;
