import React, { useContext } from 'react';
import './UsersList.scss';

import { StaffContext } from '../../context/StaffContext';

function UsersList() {
  const { staff } = useContext(StaffContext);

  return (
    <>
      <h1>Users List</h1>
      <ul className="users_list">
        {staff ? (
          staff.map((user, index) => {
            return (
              <li key={index} className="user_card">
                <h2 className="title">
                  {user.first_name} {user.last_name}
                </h2>
                <p>Email: {user.email}</p>
                <p>Staff role: {user.role}</p>
              </li>
            );
          })
        ) : (
          <p>Loading staff...</p>
        )}
      </ul>
    </>
  );
}

export default UsersList;
