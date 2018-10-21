import { getUrlsEnviroment } from '../Enviroments'
import { LoginService } from './LoginService'

export class Fetch {

  public baseUrl: string

  constructor () {
    this.baseUrl = getUrlsEnviroment().baseUrl
  }

  public fetch (pathUrl: string, init?: RequestInit, baseUrl?: string): Promise<Response> {
    const token = LoginService.getToken()
    if (token) {
      if (init) {
        init.headers = { ...init.headers, ...{ Authorization: 'JWT ' + token}}
      } else {
        init = { headers: { Authentication: token }}
      }
    }
    const base = baseUrl || this.baseUrl
    const url = base + '/' + pathUrl
    return fetch (url, init)
  }

}
