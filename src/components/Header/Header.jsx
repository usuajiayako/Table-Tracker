import NavItem from './NavItem/NavItem';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Table Tracker</h1>
      <nav>
        <ul>
          <NavItem link="/admin">Staff</NavItem>
          <NavItem link="/admin/menu">Menu</NavItem>
          <NavItem link="/admin/new-user">Add new Staff member</NavItem>
          <NavItem link="/admin/new-food">Add new Food</NavItem>
          <NavItem link="/">Sign Out</NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
