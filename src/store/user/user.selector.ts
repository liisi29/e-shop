import { createSelector } from 'reselect';

import { RootState } from '../store';
import { IUserReducerState } from './dto';

const getReducerFromRoot = (state: RootState): IUserReducerState => state.user;

export const selectCurrentUser = createSelector(
  getReducerFromRoot,
  (user: IUserReducerState) => user.currentUser
);
