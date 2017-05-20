import {
  ADD_DAY_ACTION
  ,SUBTRACT_DAY_ACTION
} from './constants'

export const createAddDayAction = () => {
  return {
    type: ADD_DAY_ACTION
  }
}

export const createSubtractDayAction = () => {
  return {
    type: SUBTRACT_DAY_ACTION
  }
}
