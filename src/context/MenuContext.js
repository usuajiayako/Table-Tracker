import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../index';

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
  const [starters, setStarters] = useState();
  const [mains, setMains] = useState();
  const [desserts, setDesserts] = useState();
  const [drinks, setDrinks] = useState();

  useEffect(() => {
    (async () => {
      try {
        const food = await axios.get(`${baseURL}/api/food-items`);
        const foodItems = food.data.foodItems;
        setStarters(
          foodItems.filter(
            (item) => item.course === 'starter' && item.is_active === true
          )
        );
        setMains(
          foodItems.filter(
            (item) => item.course === 'main' && item.is_active === true
          )
        );
        setDesserts(
          foodItems.filter(
            (item) => item.course === 'dessert' && item.is_active === true
          )
        );
        setDrinks(
          foodItems.filter(
            (item) => item.course === 'drinks' && item.is_active === true
          )
        );
      } catch (error) {
        console.log(error.message, 'Error getting all food items');
      }
    })();
  }, []);

  const addFood = (foodInfo) => {
    (async () => {
      try {
        await axios.post(`${baseURL}/api/food-items`, foodInfo);
        switch (foodInfo.course) {
          case 'starter':
            setStarters(...starters, foodInfo);
            break;
          case 'main':
            setMains(...mains, foodInfo);
            break;
          case 'dessert':
            setDesserts(...desserts, foodInfo);
            break;
          case 'drink':
            setDrinks(...drinks, foodInfo);
            break;
          default:
            console.log('the food can not be added');
            return;
        }
      } catch (error) {
        console.log(error.message, 'Adding this food has failed');
      }
    })();
  };

  const editFood = (foodInfo, foodId) => {
    console.log(foodInfo, foodId);
    (async () => {
      try {
        await axios.patch(
          `http://localhost:9090/api/food-items/${foodId}`,
          foodInfo
        );
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
        editFood,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
