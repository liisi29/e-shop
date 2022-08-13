import { ICategoryItem } from './firebase';

export interface ICartItem extends ICategoryItem {
  quantity: number;
}

export interface ICartProps {
  cartItem: ICartItem;
}
