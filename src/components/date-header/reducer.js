import {
  ADD_DAY_ACTION
  ,SUBTRACT_DAY_ACTION
} from './constants'

const default_state = {
  date: new Date
}

const updateDate = (from_date) => {
  let date = new Date(from_date)
  return function(by_day) {
    let day = (date.getDate() + by_day)
    date.setDate(day)
    return date
  }
}

const sustractDay = (from_date) => updateDate(from_date)(-1)
const addDay = (from_date) => updateDate(from_date)(1)

const reducer = (state = default_state, action) => {
  switch(action.type) {
    case ADD_DAY_ACTION:
      return Object.assign({}, state, {
        date: addDay(state.date)
      })
    break;
    case SUBTRACT_DAY_ACTION:
      return Object.assign({}, state, {
        date: sustractDay(state.date)
      })
    break;
    default:
      return state;
  }
}

export default reducer
