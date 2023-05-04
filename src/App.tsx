import { useSelector } from 'react-redux';
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { RootState } from './store/store';

function App() {

  const cartIsVisible = useSelector<RootState, boolean>(state => state.ui.cartIsVisible);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
