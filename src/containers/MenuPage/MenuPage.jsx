import MenuItems from '../../components/MenuItems/MenuItems';
import MenuContextProvider from '../../context/MenuContext';
import OrderContextProvider from '../../context/OrderContext';
import './MenuPage.scss';

const MenuPage = () => {
  return (
    <MenuContextProvider>
      <OrderContextProvider>
        <MenuItems />
      </OrderContextProvider>
    </MenuContextProvider>
  );
};

export default MenuPage;
