import React from "react";
import "./popup.scss";

function Popup({ table, closePopup, menu, order, addToOrder, submitOrder }) {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>{table}</h1>
        <button onClick={closePopup}>Close Popup</button>
        <div className="menu_and_order">
          <div className="menu_wrapper">
            <h3>Menu</h3>
            <div>
              {menu.map((item) => {
                return (
                  <p key={item.name}>
                    {item.name}
                    <button
                      onClick={() => {
                        addToOrder(item);
                      }}
                    >
                      Add to order
                    </button>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="order_wrapper">
            <h3>Order</h3>
            <div>
              {order.map((item) => {
                return <p>{item.name}</p>;
              })}
            </div>
            <button
              onClick={() => {
                submitOrder(table, order);
              }}
            >
              Submit order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
