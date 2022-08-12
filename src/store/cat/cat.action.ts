import { IRawCategoryMap } from '../../dto/firebase';
import { createAction } from '../utils/reducers';
import { CatActionType } from './dto';

export const setCategoriesMap = (categoryMap: IRawCategoryMap) =>
  createAction(CatActionType.SetCategoriesMap, categoryMap);
