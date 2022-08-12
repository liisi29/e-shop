import { User } from '@firebase/auth';

export enum UserActionType {
  SetCurrentUser = '0',
}

export interface IUserReducerState {
  currentUser: CurrentUser;
}

export type CurrentUser = User | null | undefined;
