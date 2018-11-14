const weather = (state = {}, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      return {...state, ...action.weather};
    default:
      return state;
  }
}

export default weather;