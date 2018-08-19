
import { LoginService } from '../../Services/LoginService'
import { IUserActions, UserTypes} from '../Actions/UserActions'
import { defaultUser, IUserStore } from '../Store/userStore'

export const userReducer = (state: IUserStore = defaultUser, action: IUserActions) => {

  switch (action.type) {
    case UserTypes.loginToken:
      return LoginService.loginWithToken()
    case UserTypes.logout:
      return LoginService.logOut()
    default:
      return state
  }
}
