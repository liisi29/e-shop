import { createSelector } from 'reselect';

import { RootState } from '../store';
import { ICatReducerState } from './dto';

const getReducerFromRoot = (state: RootState): ICatReducerState => state.cat;

export const selectCatMap = createSelector(
  getReducerFromRoot,
  (user: ICatReducerState) => user.categoryMap
);
