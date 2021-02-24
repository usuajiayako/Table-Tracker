import FoodForm from '../../components/FoodForm/FoodForm';
import MenuContextProvider from '../../context/MenuContext';
import './NewFoodPage.scss';

const NewFoodPage = () => (
  <MenuContextProvider>
    <FoodForm />
  </MenuContextProvider>
);

export default NewFoodPage;
