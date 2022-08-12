import { createAction, createReducer } from '@reduxjs/toolkit';
import { ActionWithPayload, IActionWithPayload } from '../utils/reducers';

import { CurrentUser, IUserReducerState, UserActionType } from './dto';

export const initialState: IUserReducerState = {
  currentUser: null,
};
export const userReducer = createReducer(initialState, (builder) => {
  // you need to ensure that you either mutate the state argument or return a new state, but not both.
  builder.addCase(
    createAction(UserActionType.SetCurrentUser),
    (state: IUserReducerState, action: UserReducerAction) => {
      const payload: CurrentUser = action.payload;
      state.currentUser = payload;
    }
  );
});

type UserReducerAction = ActionWithPayload<UserActionType, CurrentUser>;
