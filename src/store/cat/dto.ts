import { IRawCategoryMap } from '../../dto/firebase';

export enum CatActionType {
  SetCategoriesMap = '0',
}
export interface ICatReducerState {
  categoryMap: CategoryMap;
}

export type CategoryMap = IRawCategoryMap | null | undefined;
