import { FaPlus, FaMinus } from 'react-icons/fa';

import './MenuItem.scss';

const MenuItem = ({ food }) => {
  return (
    <div className="item-container">
      <p>{food.name}</p>
      <div className="action-buttons">
        <FaPlus />
        <FaMinus />
      </div>
    </div>
  );
};

export default MenuItem;
