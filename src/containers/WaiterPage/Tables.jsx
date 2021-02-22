import React from 'react';
import { useState } from 'react';

function Tables() {
  const [tables] = useState([
    { name: 'table1' },
    { name: 'table2' },
    { name: 'table3' }
  ]);

  return (
    <>
      <h2>Tables</h2>
      <ul>
        {tables.map((table) => {
          return <li>{table.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Tables;
