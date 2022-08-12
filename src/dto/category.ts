import { ICategory } from './firebase';

export interface ICartItem extends ICategory {
  quantity: number;
}
