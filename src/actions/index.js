export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = bool => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
});

export const getWeather = weather => ({
  type: 'GET_WEATHER',
  weather
});