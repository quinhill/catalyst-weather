export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = bool => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
});

export const getForecast = forecast => ({
  type: 'GET_FORECAST',
  forecast
});

export const setLocation = location => ({
  type: 'SET_WEATHER',
  location
});

export const getCurrent = weatherCurrent => ({
  type: 'GET_CURRENT',
  weatherCurrent
})