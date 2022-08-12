import './checkout.scss';

import { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import { ICartContext, ICategory } from '../../dto/category';
import TRANS from '../../translations/en.json';
const headers = [
  TRANS.product,
  TRANS.description,
  TRANS.quantity,
  TRANS.price,
  TRANS.remove,
];

const Checkout = () => {
  const { cartItems, cartTotal } = useContext<ICartContext>(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        {headers.map((h) => (
          <div className='header-block'>
            <span>{h}</span>
          </div>
        ))}
      </div>
      {cartItems.map((cartItem: ICategory) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        {TRANS.total}: ${cartTotal}
      </div>
    </div>
  );
};

export default Checkout;
