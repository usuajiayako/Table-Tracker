import React, { useContext } from 'react';
import './UsersList.scss';

import { StaffContext } from '../../context/StaffContext';

function UsersList() {
  const { users } = useContext(StaffContext);
  console.log(users);

  return (
    <>
      <h1>Users List</h1>
      <ul className="users_list">
        {users ? (
          users.map((user) => {
            return (
              <li key={user.email} className="user_card">
                <h2 className="title">
                  {user.first_name} {user.last_name}
                </h2>
                <p>Email: {user.email}</p>
                <p>Staff role: {user.role}</p>
              </li>
            );
          })
        ) : (
          <p>Loading users...</p>
        )}
      </ul>
    </>
  );
}

export default UsersList;
