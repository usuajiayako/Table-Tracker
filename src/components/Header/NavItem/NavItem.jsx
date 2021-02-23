import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';
import './NavItem.scss';

const NavItem = (props) => {
  const { logout } = useContext(AuthContext);
  return props.signout ? (
    <li onClick={() => logout()}>
      <NavLink to={props.link}>{props.children}</NavLink>
    </li>
  ) : (
    <li>
      <NavLink to={props.link}>{props.children}</NavLink>
    </li>
  );
};

export default NavItem;
