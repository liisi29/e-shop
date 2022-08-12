import { User } from 'firebase/auth';
import { USER_ACTION_TYPE } from './dto';

import { createAction } from '../utils/reducers';

export const setCurrentUser = (user: User) =>
  createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user);
export const checkUserSession = () =>
  createAction(USER_ACTION_TYPE.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email: string, password: string) =>
  createAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user: User) =>
  createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user);

export const signInFailed = (error: any) =>
  createAction(USER_ACTION_TYPE.SIGN_IN_FAILED, error);

export const signUpStart = (
  email: string,
  password: string,
  displayName: string
) =>
  createAction(USER_ACTION_TYPE.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user: User, additionalDetails: any) =>
  createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error: any) =>
  createAction(USER_ACTION_TYPE.SIGN_UP_FAILED, error);

export const signOutStart = () => createAction(USER_ACTION_TYPE.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS);

export const signOutFailed = (error: any) =>
  createAction(USER_ACTION_TYPE.SIGN_OUT_FAILED, error);
