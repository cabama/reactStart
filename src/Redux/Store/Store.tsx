import { combineReducers } from 'redux'
import { SetupReducer } from '../Reducers/setupReducer'
import { userReducer } from '../Reducers/userReducer'

export const MyStore = combineReducers({
  user: userReducer,
  setup: SetupReducer,
})
