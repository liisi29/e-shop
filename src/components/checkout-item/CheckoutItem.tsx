import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { ICartProps } from '../../dto/cart';

import './checkoutItem.scss';

export default function CheckoutItem({ cartItem }: ICartProps) {
  const { title: name, imageUrl, price, quantity } = cartItem;

  const {
    clearItemFromCart,
    increaseItemQuantity: addItemToCart,
    decreaseItemQuantity: removeItemToCart,
  } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
}