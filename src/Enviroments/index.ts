import { environment as devEnvironment} from './developerEnvironment'
import { environment as prodEnvironment} from './productionEnvironment'

export interface IEnvironment {
  urls: { baseUrl: string },
}

export function getEnviroment (): IEnvironment {
  if (process.env.REACT_APP_MODE === 'DEV') {
    return devEnvironment
  } else {
    return prodEnvironment
  }
}
