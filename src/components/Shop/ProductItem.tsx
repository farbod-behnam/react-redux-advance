import { Product } from '../../model/product.model';
import { useDispatch } from 'react-redux';
import Card from '../UI/Card/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/slice/cart-slice';

interface Props {
  product: Product;
}


export default function ProductItem(props: Props) {

  const dispatch = useDispatch();

  const { title, price, description } = props.product;


  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart(props.product))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

