
import { InewUserArgs, IUserPayloads } from '../Actions/userActions'
import { defaultUser, IUserStore } from '../Store/userStore'
import { IAction } from './index'

export const userTypes = {
  login: 'LOGIN_USER',
  logout: 'LOGOUT_USER',
}

export const userReducer = (state: IUserStore = defaultUser, action: IAction<IUserPayloads>) => {

  switch (action.type) {
    case userTypes.login:
      return (action.payload as InewUserArgs).email
    case userTypes.logout:
      return defaultUser
    default:
      return state
  }
}
