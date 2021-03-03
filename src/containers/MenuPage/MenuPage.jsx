import MenuItems from '../../components/MenuItems/MenuItems';
import MenuContextProvider from '../../context/MenuContext';
import OrderContextProvider from '../../context/OrderContext';
import { TableContextProvider } from '../../context/TableContext';
import './MenuPage.scss';

const MenuPage = () => {
  return (
    <TableContextProvider>
      <MenuContextProvider>
        <OrderContextProvider>
          <MenuItems />
        </OrderContextProvider>
      </MenuContextProvider>
    </TableContextProvider>
  );
};

export default MenuPage;
