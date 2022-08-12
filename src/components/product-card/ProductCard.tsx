import './productCard.scss';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { ICartItem } from '../../dto/category';
import TRANS from '../../translations/en.json';
import Button from '../form/button/Button';
import { ICartContext } from '../../dto/context';

export default function ProductCard({ product }: { product: ICartItem }) {
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
