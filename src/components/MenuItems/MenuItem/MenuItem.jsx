import { FaPlus, FaMinus } from 'react-icons/fa';

import './MenuItem.scss';

const MenuItem = ({ food }) => {
  return (
    <div className="item-container">
      <p>{food.name}</p>
      <div className="action-buttons">
        <div>
          <FaPlus size={20} />
        </div>
        <div>
          <FaMinus size={20} />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
