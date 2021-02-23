import React from 'react';
import { useState } from 'react';
import './WaiterPage.css';

function Tables() {
  const [tables] = useState([
    { name: 'table1' },
    { name: 'table2' },
    { name: 'table3' },
    { name: 'table4' },
    { name: 'table5' },
    { name: 'round table' },
    { name: 'more tables' },
    { name: 'unique table' }
  ]);

  return (
    <>
      <h2>Tables</h2>
      <ul>
        {tables.map((table) => {
          return (
            <li key={table.name}>
              <div class="table-icon" id={table.name}>
                {table.name}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Tables;
