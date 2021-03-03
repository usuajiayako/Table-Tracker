import EditFoodForm from '../../components/EditFoodForm/EditFoodForm';
import MenuContextProvider from '../../context/MenuContext';
import './EditFoodPage.scss';

const EditFoodPage = () => (
  <MenuContextProvider>
   <EditFoodForm />
  </MenuContextProvider>
);

export default EditFoodPage;
