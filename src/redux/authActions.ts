import ActionTypes, { LoginAction } from './actionTypes';
import authService from '../auth.service';
import { RootStore } from './store';

export async function loginAction(
  name: string,
  password: string,
): Promise<boolean | string> {
  try {
    const token = await authService.signIn(name, password);
    RootStore.dispatch<LoginAction>({ type: ActionTypes.Login, token: token });
    return true;
  } catch (ex) {
    return ex.message;
  }
}

export async function logoutAction() {}
