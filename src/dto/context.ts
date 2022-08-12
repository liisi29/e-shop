import { ICartItem } from './category';
import { ICategory } from './firebase';

export interface ICartContext {
  increaseItemQuantity: CartItemFunction;
  cartCount: number;
  cartItems: ICartItem[];
  cartTotal: number;
  clearItemFromCart: CartItemFunction;
  isCartOpen: boolean;
  decreaseItemQuantity: CartItemFunction;
  setIsCartOpenInContext: CartDisplayFunction;
}
export type CartItemFunction = (item: ICategory) => void;
export type CartDisplayFunction = (isOpen: boolean) => void;
