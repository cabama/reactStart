export enum UserTypes  {
  loginToken = 'LOGIN_TOKEN',
  loginEmail = 'LOGIN_EMAIL',
  loginSocial = 'LOGIN_SOCIAL_ACOUNT',
  logout = 'LOGOUT_USER',
}

export interface IUserActions {
  type: UserTypes
  action: {
    email?: string,
  }
}
