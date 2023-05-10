import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from './components/UI/Notification/Notification';
import useAxiosPut from './hooks/use-axios-put';
import { NotificationStatusEnum } from './store/model/notification-status-enum.model';
import { NotificationStatus } from './store/model/notification-status.model';
import { sendCartState } from './store/slice/cart-slice';
import { uiActions } from './store/slice/ui-slice';
import { CartState } from './store/state/cart-state.model';
import { RootState } from './store/store';


function App() {

  const dispatch = useDispatch();
  const cartIsVisible = useSelector<RootState, boolean>(state => state.ui.cartIsVisible);
  const cart = useSelector<RootState, CartState>(state => state.cart)
  const notification = useSelector<RootState, NotificationStatus | undefined>(state => state.ui.notification);
  const [data, error, isLoading, axiosPutRequest] = useAxiosPut<CartState>();
  const [isInitial, setIsInitial] = useState<boolean>(true);


  // ==================================================
  // side-effect and async tasks inside action creators
  // ==================================================

  // useEffect(() => {

  //   //  dispatch(sendCartState(cart));

  // }, [cart]);



  // ================================================
  // side-effect and async tasks inside the component
  // ================================================

  const sendCartState = async (cart: CartState, url: string) => {
    await axiosPutRequest(url, cart);
  }

  useEffect(() => {

    if (isInitial) {
      setIsInitial(false);
      return;
    }

    sendCartState(cart, "http://localhost:8081/carts")

  }, [cart, dispatch]);

  useEffect(() => {
    if (data)
      dispatch(uiActions.showNotification({ title: "Success!", status: NotificationStatusEnum.SUCCESS, message: "Sent cart data successfully!" }));


    if (isLoading)
      dispatch(uiActions.showNotification({ title: "Sending...", status: NotificationStatusEnum.PENDING, message: "Sending cart data!" }));


    if (error)
      dispatch(uiActions.showNotification({ title: "Error", status: NotificationStatusEnum.ERROR, message: "Sending cart data failed with error: " + error }));

  }, [data, isLoading, error, dispatch]);

  return (
    <Fragment>
      {notification && <Notification title={notification.title} status={notification.status} message={notification.message} />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
