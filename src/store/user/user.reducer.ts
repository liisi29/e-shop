import { createAction, createReducer } from '@reduxjs/toolkit';

import { UserData } from '../../dto/firebase';
import { UserActionType } from './dto';

export const initialState: IUserReducerState = {
  currentUser: null,
};
export const userReducer = createReducer(initialState, (builder) => {
  // you need to ensure that you either mutate the state argument or return a new state, but not both.
  builder.addCase(
    createAction(UserActionType.SetCurrentUser),
    (state: IUserReducerState, action: IUserReducerAction) => {
      const { payload } = action;
      state.currentUser = payload;
    }
  );
});
interface IUserReducerAction {
  type: UserActionType;
  payload: any;
}

export interface IUserReducerState {
  currentUser: UserData | null;
}
