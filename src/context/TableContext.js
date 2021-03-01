import React, { useEffect, createContext, useState } from 'react';
import axios from 'axios';

export const TableContext = createContext();

const TableContextProvider = (props) => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const tables = await axios.get('http://localhost:9090/api/tables');
        const tableData = tables.data.tables;
        setTables(tableData);
      } catch (error) {
        console.log(error.message, 'Error fetching the tables');
      }
    })();
  });

  return (
    <TableContext.Provider value={{ tables }}>
      {props.children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
