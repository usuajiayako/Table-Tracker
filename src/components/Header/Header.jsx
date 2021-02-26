import React, { useContext } from 'react';
import NavItem from './NavItem/NavItem';
import './Header.scss';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <header>
      <h1 className="table-title">Table Tracker</h1>
      <nav>
        <ul className="nav-list">
          {!currentUser ? (
            <NavItem link="/">Sign In</NavItem>
          ) : currentUser.email === 'test@test.com' ? (
            <>
              <NavItem link="/waiter" className="nav-item">
                Tables
              </NavItem>
              <NavItem link="/kitchen" className="nav-item">
                Kitchen
              </NavItem>
              <NavItem link="/admin" className="nav-item">
                Staff
              </NavItem>
              <NavItem link="/admin/new-user" className="nav-item">
                Add Staff
              </NavItem>
              <NavItem link="/admin/new-food" className="nav-item">
                Add Food
              </NavItem>
              <NavItem link="/" signout={true} className="nav-item">
                Sign Out
              </NavItem>
              <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                &#9776;
              </a>
            </>
          ) : (
            <>
              <NavItem link="/waiter">Tables</NavItem>
              <NavItem link="/kitchen">Kitchen</NavItem>
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
