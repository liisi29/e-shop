import { ICartItem } from './category';

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
export type CartItemFunction = (item: ICartItem) => void;
export type CartDisplayFunction = (isOpen: boolean) => void;
