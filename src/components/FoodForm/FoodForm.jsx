import React, { useState, useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import './FoodForm.scss';

const FoodForm = () => {
  const { addFood } = useContext(MenuContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [course, setCourse] = useState('');

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
    <div className="form-wrapper">
      <form onSubmit={submitForm} className="food-form">
        <h2 className="title">Add food to menu</h2>
        <label htmlFor="name" className="un">
          Food Name
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="price" className="un">
          Price
          <br />
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label htmlFor="course" className="un">
          Course
          <br />
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
    </div>
  );
};

export default FoodForm;
