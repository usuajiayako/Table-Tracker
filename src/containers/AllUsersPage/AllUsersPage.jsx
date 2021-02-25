import './AllUsersPage.scss';
import { StaffContextProvider } from '../../context/StaffContext';

import UsersList from '../../components/UsersList/UsersList';

import React from 'react';

const AdminPage = () => {
  return (
    <StaffContextProvider>
      <UsersList />
    </StaffContextProvider>
  );
};

export default AdminPage;
