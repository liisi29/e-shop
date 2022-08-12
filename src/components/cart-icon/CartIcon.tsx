import './cartIcon.scss';

import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

export default function CartIcon() {
  const { isCartOpen, setIsCartOpenInContext, cartCount } =
    useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpenInContext(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
}
