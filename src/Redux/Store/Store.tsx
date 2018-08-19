import { combineReducers } from 'redux'
import { userReducer } from '../Reducers/userReducer'

export const MyStore = combineReducers({
  user: userReducer,
})
