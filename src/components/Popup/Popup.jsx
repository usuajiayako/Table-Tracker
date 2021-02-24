import React from "react";
import { useHistory } from "react-router-dom";
import "./popup.scss";

function Popup({ table, closePopup, updateTableStatus }) {
  const history = useHistory();
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>{table.name}</h1>
        <h2>{table.status}</h2>
        <button onClick={closePopup}>Close Popup</button>
        <button onClick={() => updateTableStatus(table, "active")}>
          Activate table
        </button>
        <button onClick={() => updateTableStatus(table, "default")}>
          De-activate table
        </button>
        <button onClick={() => history.push(`/menu?${table.name}`)}>
          Place order
        </button>
      </div>
    </div>
  );
}

export default Popup;
