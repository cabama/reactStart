export interface IUrlsEnv {
  baseUrl: string,
  baseApi: string,
  baseUsers: string,
  baseAvatar: string,
}

export abstract class Environment {
  protected baseUrl: string
  protected baseApi = this.baseUrl + '/api'
  protected baseUsers = this.baseApi + '/users'
  protected basePublic = this.baseUrl + '/public'
  protected baseAvatar = this.baseUsers + '/avatar'

  constructor (baseUrl: string) {
    this.baseUrl = baseUrl
  }

  public getUrls (): IUrlsEnv {
    return {
      baseUrl: this.baseUrl,
      baseApi: this.baseApi,
      baseUsers: this.baseUsers,
      baseAvatar: this.baseAvatar,
    }
  }
}

export class DevEnvironment extends Environment {
  constructor () {
    super('//localhost:2525/api')
  }
}

export class ProdEnvironment extends Environment {
  constructor () {
    super('//192.168.1.10:2525/api')
  }
}
