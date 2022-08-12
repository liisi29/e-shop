export interface ICategory {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}
export interface ICartItem extends ICategory {
  quantity: number;
}
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
