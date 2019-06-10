import { Draft, produce } from 'immer';
import * as fromActions from './actions';

export interface IUserState {
  id: number;
  likeCount: number;
  name: string;
}

const USER_INITIAL_STATE: IUserState = {
  id: -1,
  likeCount: 0,
  name: '',
};

export const reducer = (state: IUserState = USER_INITIAL_STATE, action?: fromActions.UserActions): IUserState =>
  produce(state, (draft: Draft<IUserState>) => {
    console.log(action);
    switch (action && action.type) {
      case fromActions.USER__SET_USER:
        setUserHandler(draft, action as fromActions.UserSetUser);
        return;
      case fromActions.USER__UPDATE_NAME:
        updateNameHandler(draft, action as fromActions.UserUpdateName);
        return;
      case fromActions.USER__INCREMENT_LIKES:
        draft.likeCount++;
        return;
      case fromActions.USER__RESET_LIKES:
        draft.likeCount = 0;
        return;
    }
  }) as IUserState;

function setUserHandler(draft: Draft<IUserState>, action: fromActions.UserSetUser) {
  draft.id = action.payload.id;
  draft.likeCount = action.payload.likeCount;
  draft.name = action.payload.name;
}

function updateNameHandler(draft: Draft<IUserState>, action: fromActions.UserUpdateName) {
  draft.name = action.payload;
}
