import React from "react";
import "./popup.scss";

function Popup({ table, closePopup, menu, order, addToOrder, submitOrder }) {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>{table}</h1>
        <button onClick={closePopup}>Close Popup</button>
        <div>
          <button>Activate table</button>
          <button>Place order</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
