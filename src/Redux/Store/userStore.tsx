export interface IUserStore {
    cosa: number
    email: string
}

export const defaultUser: IUserStore = {
    cosa: 0,
    email: '',
}
