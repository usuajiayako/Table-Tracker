import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
// import { usersData } from '../data/users';

export const StaffContext = createContext();

export const StaffContextProvider = (props) => {
  const addNewStaff = (staffInfo) => {
    console.log(staffInfo);
  };

  const [staff, setStaff] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const users = await axios.get('http://localhost:9090/api/users');
        setStaff(users.data.users);
      } catch (error) {
        console.log('No users found');
      }
    })();
  }, []);

  return (
    <StaffContext.Provider value={{ addNewStaff, staff }}>
      {props.children}
    </StaffContext.Provider>
  );
};
