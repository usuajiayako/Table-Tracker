import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { usersData } from '../data/users';

export const StaffContext = createContext();

export const StaffContextProvider = (props) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    setUsers(usersData);
  }, []);

  const addUser = (userInfo) => {
    (async () => {
      try {
        await axios.post('http://localhost:9090/api/users', userInfo);
        console.log('New user added');
      } catch (error) {
        console.log(error.message, 'Adding new user failed');
      }
    })();
  };

  return (
    <StaffContext.Provider value={{ users, addUser }}>
      {props.children}
    </StaffContext.Provider>
  );
};
