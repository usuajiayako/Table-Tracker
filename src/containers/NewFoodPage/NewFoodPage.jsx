import React, { useState, useContext } from 'react';
import './NewFoodPage.scss';

const NewFoodPage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  const submitForm = () => {};

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
        <input
          type="text"
          name="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </label>
      <button type="submit">Add Food Item</button>
    </form>
  );
};

export default NewFoodPage;
