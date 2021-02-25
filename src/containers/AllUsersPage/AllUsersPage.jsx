import './AllUsersPage.scss';
import { StaffContextProvider } from '../../context/StaffContext';

import UsersList from '../../components/UsersList/UsersList';

import React from 'react';

const AdminPage = () => {
  return (
    <StaffContextProvider>
      <h1>This will be the staff profile list - default for admin</h1>;
      <UsersList />
    </StaffContextProvider>
  );
};

export default AdminPage;
