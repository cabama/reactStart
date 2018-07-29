import { googleAuth } from '../../Services/FirebaseAuth'
import { IAction } from '../Reducers'

export interface InewUserArgs {
  email: string
}

export type IUserPayloads = InewUserArgs | undefined

export async function login(): Promise<IAction<IUserPayloads>> {
  const user = await googleAuth()
  console.log(`Bienvenido ${user.user.email}`) // tslint:disable-line
  const action: IAction<IUserPayloads> = {
    payload: {
      email: user.user.email,
    },
    type: '',
  }
  return action

}
