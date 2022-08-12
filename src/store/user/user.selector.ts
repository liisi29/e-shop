import { createSelector } from 'reselect';

import { IUserReducerState } from './user.reducer';
import { RootState } from '../store';

const selectUserReducer = (state: RootState): IUserReducerState => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
