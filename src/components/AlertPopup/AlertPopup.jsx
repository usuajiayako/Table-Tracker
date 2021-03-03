import React, { useContext } from 'react';
import './AlertPopup.scss';

import { TableContext } from '../../context/TableContext';

function AlertPopup({ table }) {
  const { updateTableStatus } = useContext(TableContext);

  // console.log(table);

  const closeAlert = () => {
    updateTableStatus(table.table_id, 'default');
  };
  return (
    <div className="alert-popup">
      <h3>Table is {table.status}!</h3>
      <button onClick={closeAlert}>Ok</button>
    </div>
  );
}

export default AlertPopup;
