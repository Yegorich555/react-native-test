export enum ActionTypes {
  Login,
  Logout,
}

export interface LoginAction {
  type: ActionTypes.Login;
  token: string;
}

export interface LogoutAction {
  type: ActionTypes.Logout;
}

export default ActionTypes;
