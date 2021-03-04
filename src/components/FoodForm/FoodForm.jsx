import React, { useState, useContext, useEffect } from 'react';
import { MenuContext } from '../../context/MenuContext';
import './FoodForm.scss';

const FoodForm = () => {
  const { addFood } = useContext(MenuContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [course, setCourse] = useState('');
  const [foodValid, setFoodValid] = useState(true);
  const [priceValid, setPriceValid] = useState(true);

  const submitForm = (e) => {
    e.preventDefault();
    console.log('submitting form');
    if (true) {
      const foodInfo = {
        name: name,
        price: Number(price),
        course: course.toLowerCase(),
      };
      console.log(foodInfo);
      addFood(foodInfo);
    } else {
    }
  };

  const validateName = (e) => {
    const foodName = e.target.value;
    const classList = e.target.classList;

    if (typeof foodName === 'string' && foodName.length > 2) {
      classList.remove('invalid');
      classList.add('valid');
      setFoodValid(true);
    } else {
      classList.remove('valid');
      classList.add('invalid');
      setFoodValid(false);
    }
  };
  const validatePrice = (e) => {
    const price = e.target.value;
    const classList = e.target.classList;
    const regex = /^\d+(\.\d{1,2})?$/;

    if (regex.test(price)) {
      classList.remove('invalid');
      classList.add('valid');
      setPriceValid(true);
    } else {
      classList.remove('valid');
      classList.add('invalid');
      setPriceValid(false);
    }
  };

  return (
    <div className="add-food-wrapper">
      <h2 className="title">Add Food to Menu</h2>
      <form onSubmit={submitForm} className="food-form">
        <label htmlFor="name" className="form_field">
          Food Name
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => validateName(e)}
            required
          />
          <span className="text-validate" hidden={foodValid}>
            <br /> (2+ characters)
          </span>
        </label>
        <label htmlFor="price" className="form_field">
          Price
          <br />
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            onBlur={(e) => validatePrice(e)}
            id="validate-price-food-form"
            required
          />
          <span className="text-validate" hidden={priceValid}>
            <br /> (max 2 decimal places)
          </span>
        </label>
        <label htmlFor="course" className="form_field">
          Course
          <br />
          <select
            name="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option></option>
            <option>Starter</option>
            <option>Main</option>
            <option>Dessert</option>
            <option>Drinks</option>
          </select>
        </label>
        <button type="submit" className="submit">
          Add Food Item
        </button>
      </form>
    </div>
  );
};

export default FoodForm;
