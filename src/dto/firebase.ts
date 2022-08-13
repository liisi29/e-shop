export interface IRawCategoryMap {
  hats: ICategory;
  jackets: ICategory;
  mens: ICategory;
  sneakers: ICategory;
  womens: ICategory;
}
export interface ICategoryItem {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}
export interface ICategory {
  id: number;
  title: string;
  items: ICategoryItem[];
}
export type IRawCatMapKey = keyof IRawCategoryMap;
export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};
