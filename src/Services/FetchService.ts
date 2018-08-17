import { getEnviroment } from '../Enviroments'
import { LoginService } from './LoginService'

export class Fetch {

  public baseUrl: string

  constructor() {
    this.baseUrl = getEnviroment().urls.baseUrl
  }

  public async fetch(url: string, init?: RequestInit | undefined): Promise<Response> {
    const token = LoginService.getToken()
    if (token) {
      if (init) {
        init.headers = {...init.headers, ...{Authentication: token}}
      } else {
        init = { headers: { Authentication: token }}
      }
    }
    debugger
    return fetch (url, init)
  }

}
