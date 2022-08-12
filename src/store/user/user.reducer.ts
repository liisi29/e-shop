import { UserData } from '../../dto/firebase';
import { USER_ACTION_TYPE } from './dto';

export const USER_INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action: IUserReducerAction
) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};

export interface IUserReducerAction {
  type: USER_ACTION_TYPE;
  payload: any;
}

export interface IUserReducer {
  state: IUserReducerState;
  action: IUserReducerAction;
}
export interface IUserReducerState {
  currentUser: UserData | null;
}
