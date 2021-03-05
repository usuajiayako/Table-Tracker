import React, { useState, useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import './EditFoodForm.scss';

const EditFoodForm = () => {
  const { editFood } = useContext(MenuContext);
  const [name, setName] = useState('');
  const [foodId, setFoodId] = useState(0);
  const [price, setPrice] = useState(0);
  const [course, setCourse] = useState('');
  const [foodValid, setFoodValid] = useState(true);
  const [priceValid, setPriceValid] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const submitForm = (e) => {
    e.preventDefault();
    if (true) {
      const foodInfo = {
        name: name,
        price: Number(price),
        course: course.toLowerCase(),
        is_active: isActive,
      };
      editFood(foodInfo, foodId);
      setFoodId(0);
      setName('');
      setPrice(0);
      setCourse('');
      setIsActive(true);
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
    <div className="edit-food-wrapper">
      <h2 className="title">Edit food</h2>
      <form onSubmit={submitForm} className="food-form">
        <label htmlFor="food_id" className="form_field">
          Food ID <br />
          <input
            type="text"
            name="food_id"
            value={foodId}
            required
            onChange={(e) => setFoodId(e.target.value)}
          />
        </label>
        <label htmlFor="name" className="form_field">
          Food Name <br />
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
        <label htmlFor="is_active" className="form_field">
          Active?
          <br />
          <select
            name="is_active"
            value={isActive}
            onChange={(e) => setIsActive(e.target.value)}
            required
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </label>
        <button type="submit" className="submit">
          Edit Food Item
        </button>
      </form>
    </div>
  );
};

export default EditFoodForm;
