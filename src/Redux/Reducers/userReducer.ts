
import { LoginService } from '../../Services/LoginService'
import { IUserPayloads } from '../Actions/userActions'
import { defaultUser, IUserStore } from '../Store/userStore'
import { IAction } from './index'

export const userTypes = {
  loginToken : 'LOGIN_TOKEN',
  loginEmail: 'LOGIN_EMAIL',
  loginSocial: 'LOGIN_SOCIAL_ACOUNT',
  logout: 'LOGOUT_USER',
}

export const userReducer = (state: IUserStore = defaultUser, action: IAction<IUserPayloads>) => {

  switch (action.type) {
    case userTypes.loginToken:
      return LoginService.loginWithToken()
    case userTypes.logout:
      return LoginService.logOut()
    default:
      return state
  }
}
