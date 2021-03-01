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
      course: course.toLowerCase()
    };
    console.log(foodInfo);
    addFood(foodInfo);
  };

  const validateName = (e) => {
    const foodName = e.target.value;
    const classList = e.target.classList;

    if (typeof foodName === 'string' && foodName.length > 2) {
      classList.remove('invalid');
      classList.add('valid');
    } else {
      classList.remove('valid');
      classList.add('invalid');
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={submitForm} className="food-form">
        <h2 className="title">Add food to menu</h2>
        <label htmlFor="name" className="un">
          Food Name <span className="text-validate">(2+ characters)</span>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => validateName(e)}
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
