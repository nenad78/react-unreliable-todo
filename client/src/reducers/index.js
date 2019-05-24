import { combineReducers } from 'redux'

import alert from './alert'
import session from './session'
import todo from './todo'

export default combineReducers({
  alert,
  session,
  todo
})