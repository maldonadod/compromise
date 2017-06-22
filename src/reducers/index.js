import { combineReducers } from 'redux'
import date from '../components/date/reducer'
import todo from '../components/todo/reducer'
import login from '../components/login/reducer'

const rootReducer = combineReducers({
  date
  ,todo
  ,login
});

export default rootReducer
