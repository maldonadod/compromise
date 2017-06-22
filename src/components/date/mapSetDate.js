import React from 'react'
import { connect } from 'react-redux'
import {
  setDateAction
} from './actions'
const mapDispatchToProps = (dispatch) => {
  return {
    setDate: date => dispatch(setDateAction(date))
  }
}

export default x => connect(null, mapDispatchToProps)(x)
