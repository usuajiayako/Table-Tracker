import React, { createContext, useState, useEffect } from 'react';
import { foodData as food } from '../data/food';

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
  const [starters, setStarters] = useState();
  const [mains, setMains] = useState();
  const [desserts, setDesserts] = useState();
  const [drinks, setDrinks] = useState();
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    setStarters(food.filter((item) => item.course === 'starter'));
    setMains(food.filter((item) => item.course === 'main'));
    setDesserts(food.filter((item) => item.course === 'dessert'));
    setDrinks(food.filter((item) => item.course === 'drink'));
  }, []);

  const addFood = (foodInfo) => {
    console.log(foodInfo, 'context');
    setFoodItems([...foodItems, foodInfo]);
  };

  return (
    <MenuContext.Provider
      value={{
        starters,
        mains,
        desserts,
        drinks,
        addFood,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
