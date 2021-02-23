import MenuItems from '../../components/MenuItems/MenuItems';
import MenuContextProvider from '../../context/MenuContext';
import './MenuPage.scss';

const MenuPage = () => {
  return (
    <MenuContextProvider>
      <MenuItems />
    </MenuContextProvider>
  );
};

export default MenuPage;
