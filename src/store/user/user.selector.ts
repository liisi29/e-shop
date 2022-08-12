import { createSelector } from 'reselect';

import { IUserReducerState } from './user.reducer';
import { RootState } from '../store';

const getUserReducerFromRoot = (state: RootState): IUserReducerState =>
  state.user;

export const selectCurrentUser = createSelector(
  getUserReducerFromRoot,
  (user: IUserReducerState) => user.currentUser
);
