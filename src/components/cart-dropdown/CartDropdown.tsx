import './cartDropdown.scss';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import TRANS from '../../translations/en.json';
import CartItem from '../cart-item/cart-item.component';
import Button from '../form/button/Button';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {(cartItems || []).map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>{TRANS.goToCheckout}</Button>
    </div>
  );
};

export default CartDropdown;
