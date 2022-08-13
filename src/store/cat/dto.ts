import { IRawCategoryMap } from '../../dto/firebase';

export enum CatActionType {
  SetCategoriesMap = 'cat/SetCategoriesMap',
  FetchCatStart = 'cat/FetchCatStart',
  FetchCatSuccess = 'cat/FetchCatSuccess',
  FetchCatFailure = 'cat/FetchCatFailure',
}
export interface ICatReducerState {
  categoryMap: CategoryMap;
}

export type CategoryMap = IRawCategoryMap | null | undefined;
