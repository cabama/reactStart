import { IUserStore } from '../Redux/Store/userStore'

const TOKEN_KEY = 'app_token'

export class LoginService {

  public static getToken() {
    return localStorage.getItem(TOKEN_KEY) || null
  }

  public static setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token)
  }

  public static logOut() {
    localStorage.removeItem(TOKEN_KEY)
  }

  public static async loginWithToken(): Promise<IUserStore | null> {
    debugger
    LoginService.getToken()
    const token = LoginService.getToken()
    if (!token) return null
    const user = await LoginBridge.loginWithToken(token)
    if (user) return user
    else return null
  }

  public async loginWithEmail(email: string, password: string): Promise <IUserStore | null> {
    const emailRequest = await LoginBridge.loginWithEmail(email, password)
    const emailResponse = await emailRequest.json()
    if (emailResponse && emailResponse.body && emailResponse.body.token) {
      const token = emailResponse.json()
      LoginService.setToken(token)
      const user = await LoginService.loginWithToken()
      if (user) return user
      else return null
    } else {
      return null
    }
  }

  public loginWithSocialAccount() {
    LoginBridge.loginWithToken('')
  }

}

class LoginBridge {

  public static loginWithToken(token: string): Promise<any> {
    const endPoint = '/loggin'
    const requestInit: RequestInit = {
      method: 'POST',
      headers: { Authorization: `JWT ${token}`},
      mode: 'cors',
      cache: 'default',
    }
    return fetch(endPoint, requestInit)
  }

  public static loginWithEmail(email: string, password: string) {
    const endPoint = '/loggin'
    const requestInit: RequestInit = {
      method: 'POST',
      headers: { email, password },
      mode: 'cors',
      cache: 'default',
    }
    return fetch(endPoint, requestInit)
  }
}
