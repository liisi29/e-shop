import { User } from 'firebase/auth';
import { UserActionType } from './dto';

import { createAction } from '../utils/reducers';

export const setCurrentUser = (currentUser: User | null) =>
  createAction(UserActionType.SetCurrentUser, currentUser);
export const checkUserSession = () =>
  createAction(UserActionType.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(UserActionType.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email: string, password: string) =>
  createAction(UserActionType.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user: User) =>
  createAction(UserActionType.SIGN_IN_SUCCESS, user);

export const signInFailed = (error: any) =>
  createAction(UserActionType.SIGN_IN_FAILED, error);

export const signUpStart = (
  email: string,
  password: string,
  displayName: string
) =>
  createAction(UserActionType.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user: User, additionalDetails: any) =>
  createAction(UserActionType.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error: any) =>
  createAction(UserActionType.SIGN_UP_FAILED, error);

export const signOutStart = () => createAction(UserActionType.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(UserActionType.SIGN_OUT_SUCCESS);

export const signOutFailed = (error: any) =>
  createAction(UserActionType.SIGN_OUT_FAILED, error);
