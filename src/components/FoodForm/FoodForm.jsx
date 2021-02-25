import React, { useState, useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

const FoodForm = () => {
  const { addFood } = useContext(MenuContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [course, setCourse] = useState('');

  console.log(price, 'price');

  const submitForm = (e) => {
    e.preventDefault();
    const foodInfo = {
      name: name,
      price: Number(price),
      course: course.toLowerCase(),
    };
    console.log(foodInfo);
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
          type="number"
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
