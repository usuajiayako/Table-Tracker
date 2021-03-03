import React from 'react';
import { useHistory } from 'react-router-dom';
import './popup.scss';

function Popup({ table, closePopup, setTableStatus }) {
  const history = useHistory();
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>{table.name}</h1>
        <h2>{table.status}</h2>
        <button className="popup-button" onClick={closePopup}>Close Popup</button>
        <button className="popup-button" onClick={() => setTableStatus(table, 'active')}>
          Activate table
        </button>
        <button className="popup-button" onClick={() => setTableStatus(table, 'default')}>
          De-activate table
        </button>
        <button className="popup-button" onClick={() => history.push(`/menu?${table.table_id}`)}>
          Place order
        </button>
      </div>
    </div>
  );
}

export default Popup;
