import React, { Component } from 'react'
import { connect } from 'react-redux'
import View from './DateHeaderView'
import {
  createAddDayAction
  ,createSubtractDayAction
} from './actions'

const mapStateToProps = (state) => {
  return {
    date: state.date_header.date
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sustractDay: () => {
      dispatch(createSubtractDayAction())
    }
    ,addDay: () => {
      dispatch(createAddDayAction())
    }
  }
}

export default connect(
  mapStateToProps
  , mapDispatchToProps
)(View)
