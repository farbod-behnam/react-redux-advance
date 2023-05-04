import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/slice/ui-slice';
import { RootState } from '../../store/store';

interface Props {

}

export default function CartButton (props: Props) {

  const dispatch = useDispatch();
  const cartTotalQuantityState = useSelector<RootState, number>(state => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantityState}</span>
    </button>
  );
};

