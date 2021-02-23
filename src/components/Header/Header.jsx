import React, { useContext } from 'react';
import NavItem from './NavItem/NavItem';
import './Header.scss';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <header>
      <h1>Table Tracker</h1>
      <nav>
        <ul>
          {!currentUser ? (
            <NavItem link="/">Sign In</NavItem>
          ) : currentUser.email === 'test@test.com' ? (
            <>
              <NavItem link="/admin">Staff</NavItem>
              <NavItem link="/admin/menu">Menu</NavItem>
              <NavItem link="/admin/new-user">Add Staff</NavItem>
              <NavItem link="/admin/new-food">Add Food</NavItem>
              <NavItem link="/">Sign Out</NavItem>
            </>
          ) : (
            <>
              <NavItem link="/admin/menu">Menu</NavItem>
              <NavItem link="/" signout={true}>
                Sign Out
              </NavItem>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
