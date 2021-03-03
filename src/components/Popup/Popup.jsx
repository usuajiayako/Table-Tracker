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
        <button onClick={closePopup} className="popup-button">
          Close Popup
        </button>
        <button
          onClick={() => setTableStatus(table, 'active')}
          className="popup-button"
        >
          Activate table
        </button>
        <button
          onClick={() => setTableStatus(table, 'default')}
          className="popup-button"
        >
          De-activate table
        </button>
        <button
          onClick={() => history.push(`/menu?${table.table_id}`)}
          className="popup-button"
        >
          Place order
        </button>
      </div>
    </div>
  );
}

export default Popup;
