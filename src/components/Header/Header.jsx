import NavItem from "./NavItem/NavItem";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <h1>Table Tracker</h1>
      <nav>
        <ul>
          <NavItem link="/waiter">Tables</NavItem>
          <NavItem link="/admin">Staff</NavItem>
          <NavItem link="/admin/menu">Menu</NavItem>
          <NavItem link="/admin/new-user">Add Staff</NavItem>
          <NavItem link="/admin/new-food">Add Food</NavItem>
          <NavItem link="/">Sign Out</NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
