import { combineReducers } from 'redux'
import date_header from '../components/date-header/reducer'
import todo from '../components/todo/reducer'

const rootReducer = combineReducers({
  date_header
  ,todo
});

export default rootReducer
