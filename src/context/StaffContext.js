import React, { createContext, useEffect, useState } from 'react';
import { usersData } from '../data/users';

export const StaffContext = createContext();

export const StaffContextProvider = (props) => {
  const addNewStaff = (staffInfo) => {
    console.log(staffInfo);
  };

  const [users, setUsers] = useState();

  useEffect(() => {
    setUsers(usersData);
  }, []);

  return (
    <StaffContext.Provider value={{ addNewStaff, users }}>
      {props.children}
    </StaffContext.Provider>
  );
};
