import { ICategory } from '../../dto/firebase';
import { Action, ActionWithPayload, createAction } from '../utils/createAction';
import { withMatcher } from '../utils/withMatcher';
import { CatActionType } from './dto';

export type FetchCategoriesStart = Action<CatActionType.FetchCatStart>;

export type FetchCategoriesSucess = ActionWithPayload<
  CatActionType.FetchCatSuccess,
  ICategory[]
>;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart => createAction(CatActionType.FetchCatStart)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: ICategory[]): FetchCategoriesSucess =>
    createAction(CatActionType.FetchCatSuccess, categoriesArray)
);
export type FetchCategoriesFailed = ActionWithPayload<
  CatActionType.FetchCatFailure,
  Error
>;
export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CatActionType.FetchCatFailure, error)
);
