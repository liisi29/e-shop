export interface IRawCategoryMap {
  hats: ICategory[];
  jackets: ICategory[];
  mens: ICategory[];
  sneakers: ICategory[];
  womens: ICategory[];
}
export interface ICategory {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}
export type IRawCatMapKey = keyof IRawCategoryMap;
