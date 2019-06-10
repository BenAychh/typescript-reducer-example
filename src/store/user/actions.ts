// Lots of actions
/* tslint:disable max-classes-per-file */

import { IAction } from '../action.model';
import { IUserState } from './reducer';

export const USER_PREFIX = `[USER]`;
export const USER__SET_USER = `${USER_PREFIX} set user`;
export const USER__UPDATE_NAME = `${USER_PREFIX} update name`;
export const USER__INCREMENT_LIKES = `${USER_PREFIX} increment likes`;
export const USER__RESET_LIKES = `${USER_PREFIX} reset likes`;

export class UserSetUser implements IAction {
  public readonly type = USER__SET_USER;
  constructor(public payload: IUserState) {}
}

export class UserUpdateName implements IAction {
  public readonly type = USER__UPDATE_NAME;
  constructor(public payload: string) {}
}

export class UserIncrementLikes implements IAction {
  public readonly type = USER__INCREMENT_LIKES;
}

export class UserResetLikes implements IAction {
  public readonly type = USER__RESET_LIKES;
}

export type UserActions = UserSetUser | UserUpdateName | UserIncrementLikes | UserResetLikes;
