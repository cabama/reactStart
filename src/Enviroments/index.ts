import {ENVIROMENT as DEV_EVIRONMENT} from './developer.env'
import {ENVIROMENT as PROD_ENVIRONMENT} from './production.env'

export interface IEnvironment {
  urls: { baseUrl: string },
}

export function getEnviroment(): IEnvironment {
  if (process.env.NODE_ENV === 'DEV') {
    return DEV_EVIRONMENT
  } else {
    return PROD_ENVIRONMENT
  }
}
