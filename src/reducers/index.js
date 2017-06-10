import { combineReducers } from 'redux'
import date_header from '../components/date-header/reducer'
import todo from '../components/todo/reducer'
import login from '../components/login/reducer'

const rootReducer = combineReducers({
  date_header
  ,todo
  ,login
});

export default rootReducer
