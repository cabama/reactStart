import { baseApi } from './../shared/urls'

const TOKEN_KEY = 'app_token'

export interface IUserResponse {
  _id: string
  email: string
  origin: string
  role: string
}

export class LoginService {

  public static getToken() {
    return localStorage.getItem(TOKEN_KEY) || null
  }

  public static removeToken() {
    return localStorage.removeItem(TOKEN_KEY)
  }

  public static setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token)
  }

  public static async loginWithToken(): Promise<IUserResponse | null> {
    const token = LoginService.getToken()
    if (!token) return null
    const responseJson = await LoginBridge.loginWithToken(token)
      .then((response) => response.json())
      .catch(() => LoginService.removeToken)
    if (responseJson && responseJson.user) return responseJson.user
    else return null
  }

  public static async loginWithEmail(email: string, password: string): Promise <IUserResponse | null> {
    const emailRequest = await LoginBridge.loginWithEmail(email, password)
    const emailResponse = await emailRequest.json()
    if (emailResponse && emailResponse.token) {
      LoginService.setToken(emailResponse.token)
      const user = await LoginService.loginWithToken()
      if (user) return user
      else return null
    } else {
      return null
    }
  }

  public static async singUp(email: string, name: string, password: string): Promise<any> {
    return LoginBridge.singUp(email, name, password)
  }
}

class LoginBridge {

  public static loginWithToken(token: string): Promise<any> {
    const endPoint = baseApi + '/users/me'
    const requestInit: RequestInit = {
      method: 'GET',
      headers: { Authorization: `JWT ${token}`},
      mode: 'cors',
      cache: 'default',
    }
    return fetch(endPoint, requestInit)
  }

  public static singUp(email: string, name: string, password: string): Promise<any> {
    const endPoint = baseApi + '/login/signup'
    const requestInit: RequestInit = {
      method: 'POST',
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      body: `email=${email}&password=${password}`,
      cache: 'default',
    }
    return fetch(endPoint, requestInit)
  }

  public static loginWithEmail(email: string, password: string) {
    const endPoint = baseApi + '/login/email'
    const requestInit: RequestInit = {
      method: 'POST',
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      body: `email=${email}&password=${password}`,
      cache: 'default',
    }
    return fetch(endPoint, requestInit)
  }
}
