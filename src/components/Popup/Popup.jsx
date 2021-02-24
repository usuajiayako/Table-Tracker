import React from "react";
import { useHistory } from "react-router-dom";
import "./popup.scss";

function Popup({ tableName, closePopup }) {
  const history = useHistory();
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>{tableName}</h1>
        <button onClick={closePopup}>Close Popup</button>
        <button>Activate table</button>
        <button onClick={() => history.push(`/menu?${tableName}`)}>
          Place order
        </button>
      </div>
    </div>
  );
}

export default Popup;
