import MenuItems from '../../components/MenuItems/MenuItems';
import MenuContextProvider from '../../context/MenuContext';
import './MenuPage.css';

const MenuPage = () => {
  return (
    <MenuContextProvider>
      <MenuItems />
    </MenuContextProvider>
  );
};

export default MenuPage;
