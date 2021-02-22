import { NavLink } from 'react-router-dom';

import './NavItem.scss';

const NavItem = (props) => {
  return (
    <li>
      <NavLink to={props.link}>{props.children}</NavLink>
    </li>
  );
};

export default NavItem;
