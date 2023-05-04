import { Product } from '../../model/product.model';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS: Product[] = [
  {id: 1, price: 6, title: "My First Book", description: "The first book I ever wrote"},
  {id: 2, price: 5, title: "My second Book", description: "The second book I ever wrote"},
]



export default function Products() {

  const product: Product = {id: 1, title: "Test", price: 6, description: "This is a first product - amazing!" };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => <ProductItem key={product.id} product={product} />)}
      </ul>
    </section>
  );
};

