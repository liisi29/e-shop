import { createSelector } from 'reselect';

import { IUserState } from './user.reducer';
import { RootState } from '../store';

export const selectUserReducer = (state: RootState): IUserState => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
