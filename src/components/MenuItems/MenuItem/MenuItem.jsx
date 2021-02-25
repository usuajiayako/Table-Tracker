import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

import './MenuItem.scss';

const MenuItem = ({ food, handleAddRemove }) => {
  return (
    <div className="item-container">
      <p>{food.name}</p>
      <div className="action-buttons">
        <div>
          <FaPlus
            size={20}
            onClick={() => {
              handleAddRemove(food, 1);
            }}
          />
        </div>
        <div>
          <FaMinus
            size={20}
            onClick={() => {
              handleAddRemove(food, -1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
