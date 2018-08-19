
export enum setupTypes {
  changeDevice = 'CHANGE_DEVICE_VIEW',
  setDevice = 'SET_DEVICE_VIEW',
}

export interface ISetUpActions {
  type: setupTypes
  action: {
    isMobile?: boolean,
  }
}

export const setMobileView = (mobileView: boolean) => {
  return {
    type: setupTypes.setDevice,
    isMobile: mobileView,
  }
}

export const changeMobileView = () => {
  return {
    type: setupTypes.changeDevice,
  }
}

export const UserActions = {
  setMobileView,
  changeMobileView,
}
