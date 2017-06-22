import {
  SET_DATE
} from './constants'
const defaultState = {
  date: new Date
}
export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case SET_DATE:
      return {...state, ...{date: action.date}};
      break;
    default:
      return state;
  }
}
