import React, { useContext } from 'react';

import { StaffContext } from '../../context/StaffContext';

function UsersList() {
  const { users } = useContext(StaffContext);
  console.log(users);

  return (
    <>
      <h2>Users List</h2>
      <ul>
        {users ? (
          users.map((user) => {
            return (
              <li key={user.email}>
                <h2>
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
