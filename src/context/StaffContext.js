import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../index';

export const StaffContext = createContext();

export const StaffContextProvider = props => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const users = await axios.get(`${baseURL}/api/users`);
        setStaff(users.data.users);
      } catch (error) {
        console.log('No users found');
      }
    })();
  }, []);

  const addUser = userInfo => {
    (async () => {
      try {
        await axios.post(`${baseURL}/api/users`, userInfo);
        console.log('New user added');
      } catch (error) {
        console.log(error.message, 'Adding new user failed');
      }
    })();
  };

  return (
    <StaffContext.Provider value={{ addUser, staff }}>
      {props.children}
    </StaffContext.Provider>
  );
};
