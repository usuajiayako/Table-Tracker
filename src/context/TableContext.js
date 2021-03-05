import React, { useEffect, createContext, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../index';

export const TableContext = createContext();

const updateTableStatus = (tableId, newStatus) => {
  const statusObj = { status: newStatus };
  (async () => {
    try {
      await axios.patch(`${baseURL}/api/tables/${tableId}`, statusObj);
    } catch (error) {
      console.log(error.message, 'Serving table failed');
    }
  })();
};

export const TableContextProvider = props => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      (async () => {
        try {
          const tables = await axios.get(`${baseURL}/api/tables`);
          const tableData = tables.data.tables;
          setTables(tableData);
        } catch (error) {
          console.log(error.message, 'Error fetching the tables');
        }
      })();
    }, 3000);
    return () => {
      clearInterval(intervalId)
    }
  }, []);

  return (
    <TableContext.Provider value={{ tables, updateTableStatus }}>
      {props.children}
    </TableContext.Provider>
  );
};
