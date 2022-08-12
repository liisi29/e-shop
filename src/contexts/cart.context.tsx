import {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
  useReducer,
} from 'react';
import { ICartItem } from '../dto/category';
import { CartDisplayFunction, ICartContext } from '../dto/context';
import { ICategory } from '../dto/firebase';

export const CartContext = createContext<ICartContext>({
  increaseItemQuantity: () => {},
  cartCount: 0,
  cartItems: [],
  cartTotal: 0,
  clearItemFromCart: () => {},
  isCartOpen: false,
  decreaseItemQuantity: () => {},
  setIsCartOpenInContext: () => {},
});

function reducer(
  cartItems: ICartItem[],
  action: {
    type: 'increase' | 'decrease' | 'clear';
    itemInFocus: ICategory;
  }
) {
  switch (action.type) {
    case 'increase':
      return increaseItemInCart(cartItems, action.itemInFocus);
    case 'decrease':
      return decreaseItemInCart(cartItems, action.itemInFocus);
    case 'clear':
      return deleteItemFromCart(cartItems, action.itemInFocus);
    default:
      throw new Error();
  }
}

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, dispatch] = useReducer(reducer, []);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const increaseItemQuantity = (item: ICategory) => {
    dispatch({ type: 'increase', itemInFocus: item });
  };

  const decreaseItemQuantity = (item: ICartItem) => {
    dispatch({ type: 'decrease', itemInFocus: item });
  };

  const clearItemFromCart = (item: ICartItem) => {
    dispatch({ type: 'clear', itemInFocus: item });
  };

  const setIsCartOpenInContext: CartDisplayFunction = (isOpen) =>
    setIsCartOpen(isOpen);
  const value = {
    isCartOpen,
    setIsCartOpenInContext,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function increaseItemInCart(cartItems: ICartItem[], productToAdd: ICategory) {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

function decreaseItemInCart(
  cartItems: ICartItem[],
  cartItemToRemove: ICategory
) {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
}

function deleteItemFromCart(
  cartItems: ICartItem[],
  cartItemToClear: ICategory
) {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}