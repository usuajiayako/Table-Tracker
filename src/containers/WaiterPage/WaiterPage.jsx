import React, { useState } from "react";
import "./WaiterPage.scss";
import { useHistory } from "react-router-dom";

import Popup from "../../components/Popup/Popup";

const WaiterPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTable, setActiveTable] = useState("");
  const [tables] = useState([
    { name: "table1" },
    { name: "table2" },
    { name: "table3" },
  ]);

  function togglePopup(tableName) {
    if (tableName) {
      setActiveTable(tableName);
    }
    setShowPopup(!showPopup);
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
                className="table-icon"
                id={table.name}
                onClick={() => togglePopup(table.name)}
              >
                {table.name}
              </div>
            </li>
          );
        })}
      </ul>
      {showPopup && <Popup tableName={activeTable} closePopup={togglePopup} />}
      <div className="waiter-footer">
        <button
          onClick={() => {
            history.push("/kitchen");
          }}
        >
          View all orders
        </button>
      </div>
    </div>
  );
};

export default WaiterPage;
