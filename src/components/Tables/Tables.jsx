import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Tables.scss';

import { TableContext } from '../../context/TableContext';
import Popup from '../Popup/Popup';

function Tables() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTable, setActiveTable] = useState('');
  const { tables, updateTableStatus } = useContext(TableContext);
  const history = useHistory();
  const sortedTables = tables.sort((tableA, tableB) => {
    return tableA.table_id - tableB.table_id;
  });

  function togglePopup(table) {
    if (table) {
      setActiveTable(table);
    }
    setShowPopup(!showPopup);
  }

  function setTableStatus(table, newStatus) {
    setActiveTable((table.status = newStatus));
    setShowPopup(!showPopup);
    updateTableStatus(table.table_id, newStatus);
  }

  return (
    <div className="waiter_view">
      <h2>Waiter View</h2>
      <ul className="table-list">
        {sortedTables.map((table) => {
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
          setTableStatus={setTableStatus}
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
}

export default Tables;
