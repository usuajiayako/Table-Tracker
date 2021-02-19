import './App.css';
import AdminPage from './containers/AdminPage/AdminPage';
import CashierPage from './containers/CashierPage/CashierPage';
import KitchenPage from './containers/KitchenPage/KitchenPage';
import WaiterPage from './containers/WaiterPage/WaiterPage';

const App = () => {
  return (
    <div className='App'>
      <h1>Hello</h1>
      <AdminPage />
      <CashierPage />
      <KitchenPage />
      <WaiterPage />
    </div>
  );
};

export default App;
