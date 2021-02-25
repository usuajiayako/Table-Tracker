import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { foodData as food } from '../data/food';

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
  const [starters, setStarters] = useState();
  const [mains, setMains] = useState();
  const [desserts, setDesserts] = useState();
  const [drinks, setDrinks] = useState();
  // const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    setStarters(food.filter((item) => item.course === 'starter'));
    setMains(food.filter((item) => item.course === 'main'));
    setDesserts(food.filter((item) => item.course === 'dessert'));
    setDrinks(food.filter((item) => item.course === 'drink'));
  }, []);

  const addFood = (foodInfo) => {
    // setFoodItems([...foodItems, foodInfo]);
    (async () => {
      try {
        await axios.post('http://localhost:9090/api/food-items', {
          foodInfo,
        });
        console.log('new food has been added');
      } catch (error) {
        console.log(error.message, 'Adding this food has failed');
      }
    })();
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
