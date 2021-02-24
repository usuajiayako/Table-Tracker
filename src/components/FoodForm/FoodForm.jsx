import React, { useState, useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

const FoodForm = () => {
  const { addFood } = useContext(MenuContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    const foodInfo = {
      name: name,
      price: price,
      course: course,
    };

    addFood(foodInfo);
  };
  return (
    <form onSubmit={submitForm} className="food-form">
      <label htmlFor="name">
        Food Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label htmlFor="course">
        Course
        <select
          name="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option>Starter</option>
          <option>Main</option>
          <option>Dessert</option>
          <option>Drinks</option>
        </select>
      </label>
      <button type="submit">Add Food Item</button>
    </form>
  );
};

export default FoodForm;
