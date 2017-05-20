import React, { Component } from 'react'
import { connect } from 'react-redux'
import View from './DateHeaderView'

class DateHeaderContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <View date={this.props.date} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.date_header.date
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

export default connect(
  mapStateToProps
  , mapDispatchToProps
)(DateHeaderContainer)
