import ActionTypes from './actionTypes';

const initialState = {};

export default function reducer(state = initialState, action = null) {
  if (action.type.startsWith && action.type.startsWith('@@redux/INIT'))
    return state;

  switch (action.type) {
    case ActionTypes.Login:
      console.warn('TODO implement redux-login');
      break;

    default:
      console.warn(
        `Reducer.Error: there no actions for type ${action.type}`,
        action,
      );
      break;
  }
}
