import {
  SET_DATE
} from './constants'

export function setDateAction(date) {
  return {
    type: SET_DATE
    ,date
  }
}
