import React, { useContext } from 'react';

import { MenuContext } from '../../context/MenuContext';

const MenuItems = () => {
  const { starters, mains, desserts, drinks } = useContext(MenuContext);

  return (
    <>
      <div>
        {starters &&
          starters.map((starter) => {
            return <p>{starter.name}</p>;
          })}
      </div>
      <div>
        {mains &&
          mains.map((main) => {
            return <p>{main.name}</p>;
          })}
      </div>
      <div>
        {desserts &&
          desserts.map((dessert) => {
            return <p>{dessert.name}</p>;
          })}
      </div>
      <div>
        {drinks &&
          drinks.map((drink) => {
            return <p>{drink.name}</p>;
          })}
      </div>
    </>
  );
};

export default MenuItems;
