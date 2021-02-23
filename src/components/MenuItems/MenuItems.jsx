import React, { useContext } from 'react';

import { MenuContext } from '../../context/MenuContext';

import './MenuItems.scss';

const MenuItems = () => {
  const { starters, mains, desserts, drinks } = useContext(MenuContext);

  return (
    <>
      <div className="course-container">
        <h3 className="title">Starters</h3>
        {starters &&
          starters.map((starter) => {
            return (
              <p key={starter.food_id} className="items">
                {starter.name}
              </p>
            );
          })}
      </div>
      <div className="course-container">
        <h3 className="title">Mains</h3>
        {mains &&
          mains.map((main) => {
            return (
              <p key={main.food_id} className="items">
                {main.name}
              </p>
            );
          })}
      </div>
      <div className="course-container">
        <h3 className="title">Desserts</h3>
        {desserts &&
          desserts.map((dessert) => {
            return (
              <p key={dessert.food_id} className="items">
                {dessert.name}
              </p>
            );
          })}
      </div>
      <div className="course-container">
        <h3 className="title">Drinks</h3>
        {drinks &&
          drinks.map((drink) => {
            return (
              <p key={drink.food_id} className="items">
                {drink.name}
              </p>
            );
          })}
      </div>
    </>
  );
};

export default MenuItems;
