import './checkout.scss';

import { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import TRANS from '../../translations/en.json';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>{TRANS.product}</span>
        </div>
        <div className='header-block'>
          <span>{TRANS.description}</span>
        </div>
        <div className='header-block'>
          <span>{TRANS.quantity}</span>
        </div>
        <div className='header-block'>
          <span>{TRANS.price}</span>
        </div>
        <div className='header-block'>
          <span>{TRANS.remove}</span>
        </div>
      </div>
      {cartItems.map((cartItem: any) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;
