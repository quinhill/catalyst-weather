const weather = (state = [], action) => {
  switch (action.type) {
    case 'GET_CURRENT':
      return [...state, action.currentWeather]
    case 'GET_FORECAST':
       state.forEach(place => place.active = false)
       return [...state, action.forecast];
    case 'SET_WEATHER':
      return state.map(place => {
        if (place.city.toUpperCase() === action.location.toUpperCase()) {
          place.active = true
          return place
        } else {
          place.active = false
          return place
        }
      });
    default:
      return state;
  }
}

export default weather;