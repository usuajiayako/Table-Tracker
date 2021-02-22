import { NavLink } from 'react-router-dom';

import './NavItem.css';

const NavItem = (props) => {
  return (
    <li>
      <NavLink to={props.link}>{props.children}</NavLink>
    </li>
  );
};

export default NavItem;
