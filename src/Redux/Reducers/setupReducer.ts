import { ISetUpActions, setupTypes } from '../Actions/setupActions'
import { defaultSetUpStore, ISetUpStore } from '../Store/setupStore'

export const SetupReducer = (state: ISetUpStore = defaultSetUpStore, action: ISetUpActions) => {

  switch (action.type) {
    case setupTypes.changeDevice:
      return { ...state, ...{isMobile: !state.isMobile}}
    case setupTypes.setDevice:
      return { ...state, ...{ isMobile: !state.isMobile }}
    default:
      return state
  }
}
