import { User } from '@firebase/auth';

export enum UserActionType {
  SetCurrentUser = 'user/SetCurrentUser',
}

export interface IUserReducerState {
  currentUser: CurrentUser;
}

export type CurrentUser = User | null | undefined;
