import { LoginService } from '../../Services/LoginService'

export interface IUserStore {
    login: boolean
    email: string
    name: string
    role: 'admin' | 'user' | null
    loginService?: LoginService
}

export const defaultUser: IUserStore = {
    login: false,
    name: '',
    email: '',
    role: null,
}
