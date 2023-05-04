import { useDispatch } from 'react-redux';
import { Item } from '../../model/item.model';
import { Product } from '../../model/product.model';
import { cartActions } from '../../store/slice/cart-slice';
import classes from './CartItem.module.css';

interface Props {
  item: Item;
}

export default function CartItem(props: Props) {

  const dispatch = useDispatch();


  const addItemhandler = () => {
    const item = props.item;
    let product: Product = {id: item.id, title: item.title, description: "", price: item.price};
    dispatch(cartActions.addItemToCart(product));
  }

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.item.id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.item.title}</h3>
        <div className={classes.price}>
          ${props.item.totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${props.item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemhandler}>+</button>
        </div>
      </div>
    </li>
  );
};

