import { useSelector } from 'react-redux';
import { Item } from '../../model/item.model';
import { RootState } from '../../store/store';
import Card from '../UI/Card/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';




export default function Cart() {

  const cartItems = useSelector<RootState, Item[]>(state => state.cart.items);


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </ul>
    </Card>
  );
};

