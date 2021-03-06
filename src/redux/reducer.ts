import ActionTypes, { LoginAction } from './actionTypes';
import { AnyAction } from 'redux';

export interface StoreState {
  userToken?: string;
}

const initialState: StoreState = {
  userToken: 'someTokenHere',
};

interface InitAction {
  type: string;
}

const initActions = ['@@redux/INIT', 'persist/PERSIST', 'persist/REHYDRATE'];

export default function reducer(
  state = initialState,
  action: LoginAction | AnyAction = null,
): StoreState {
  if (
    ((action as unknown) as InitAction).type.startsWith &&
    initActions.some((v) =>
      ((action as unknown) as InitAction).type.startsWith(v),
    )
  ) {
    return state;
  }

  switch (action.type) {
    case ActionTypes.Login:
      return {
        userToken: (action as LoginAction).token,
      };

    case ActionTypes.Logout: {
      return {
        userToken: null,
      };
    }

    default:
      console.warn(
        `Reducer.Error: there no actions for type '${action.type}'`,
        action,
      );
      return state;
  }
}
