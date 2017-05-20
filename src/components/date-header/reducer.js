const default_state = {
  date: new Date
}

const reducer = (state = default_state, action) => {

  switch(action.type) {
    case 'SET_DATE':
      return Object.assign({}, state, action.date)
    break;
    default:
      return state;
  }
}

export default reducer
