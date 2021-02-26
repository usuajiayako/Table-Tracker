import React, { useState } from 'react';
import './WaiterPage.scss';
import { useHistory } from 'react-router-dom';

import Popup from '../../components/Popup/Popup';

const WaiterPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTable, setActiveTable] = useState('');
  const [tables] = useState([
    { name: 'table1', status: 'default' },
    { name: 'table2', status: 'active' },
    { name: 'table3', status: 'waiting-food' },
    { name: 'table4', status: 'served' },
  ]);

  function togglePopup(table) {
    if (table) {
      setActiveTable(table);
    }
    setShowPopup(!showPopup);
  }

  function updateTableStatus(table, newStatus) {
    setActiveTable((table.status = newStatus));
    setShowPopup(!showPopup);
    console.log(tables);
  }

  const history = useHistory();

  return (
    <div className="waiter_view">
      <h2>Waiter View</h2>
      <ul>
        {tables.map((table) => {
          return (
            <li key={table.name}>
              <div
                className={`table-icon ${table.status}`}
                id={table.name}
                onClick={() => togglePopup(table)}
              >
                {table.name}
              </div>
            </li>
          );
        })}
      </ul>
      {showPopup && (
        <Popup
          table={activeTable}
          closePopup={togglePopup}
          updateTableStatus={updateTableStatus}
        />
      )}
      <div className="waiter-footer">
        <button
          onClick={() => {
            history.push('/view-orders');
          }}
        >
          View all orders
        </button>
      </div>
    </div>
  );
};

export default WaiterPage;
