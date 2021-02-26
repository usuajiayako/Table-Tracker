import React, { useContext } from 'react';
import NavItem from './NavItem/NavItem';
import './Header.scss';
import { AuthContext } from '../../context/AuthContext';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  // function myFunction() {
  //   var x = document.getElementById("myTopnav");
  //   if (x.className === "topnav") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
  // }

  const burgerDropDown = () => {
    const element = document.getElementsByTagName('ul');
    if (element[0].className === 'nav-list') {
      element[0].className += ' drop-down';
    } else {
      element[0].className = 'nav-list';
    }
  };

  return (
    <header>
      <h1 className="table-title">Table Tracker</h1>
      <nav>
        <FaBars size={20} onClick={burgerDropDown} className="icon" />
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
            </>
          ) : (
            <>
              <NavItem link="/waiter" className="nav-item">
                Tables
              </NavItem>
              <NavItem link="/kitchen" className="nav-item">
                Kitchen
              </NavItem>
              <NavItem link="/" signout={true} className="nav-item">
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
