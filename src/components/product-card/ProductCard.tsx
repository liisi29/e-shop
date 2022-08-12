import './productCard.scss';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { ICartContext } from '../../dto/context';
import { ICategory } from '../../dto/firebase';
import TRANS from '../../translations/en.json';
import Button from '../form/button/Button';

export default function ProductCard({ product }: { product: ICategory }) {
  const { name, price, imageUrl } = product;
  const { increaseItemQuantity: addItemToCart } =
    useContext<ICartContext>(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        {TRANS.addToCart}
      </Button>
    </div>
  );
}
