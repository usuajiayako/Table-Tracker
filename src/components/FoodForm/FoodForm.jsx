import React, { useState, useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import './FoodForm.scss';

const FoodForm = () => {
  const { addFood } = useContext(MenuContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [course, setCourse] = useState('');
  const [foodValid, setFoodValid] = useState(true);
  const [priceValid, setPriceValid] = useState(true);

  const submitForm = e => {
    e.preventDefault();
    const foodInfo = {
      name: name,
      price: Number(price),
      course: course.toLowerCase()
    };
    console.log(foodInfo);
    addFood(foodInfo);
  };

  const validateName = e => {
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
  const validatePrice = e => {
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
    <div className="form-wrapper">
      <form onSubmit={submitForm} className="food-form">
        <h2 className="title">Add food to menu</h2>
        <label htmlFor="name" className="un">
          Food Name <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            onBlur={e => validateName(e)}
          />
          <span className="text-validate" hidden={foodValid}>
            <br /> (2+ characters)
          </span>
        </label>
        <label htmlFor="price" className="un">
          Price
          <br />
          <input
            type="text"
            name="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            onBlur={e => validatePrice(e)}
          />
          <span className="text-validate" hidden={priceValid}>
            <br /> (max 2 decimal places)
          </span>
        </label>
        <label htmlFor="course" className="un">
          Course
          <br />
          <select
            name="course"
            value={course}
            onChange={e => setCourse(e.target.value)}
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
