import { isLoading, hasErrored, getWeather } from '../actions';

const getWeatherThunk = (url) => {
  console.log(url)
  return (dispatch) =>  {
    dispatch(isLoading(true))
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        console.log(response)
        dispatch(isLoading(false))
        return response
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch(getWeather(data))
    })
    .catch((error) => {
      console.log(error)
      dispatch(hasErrored(true))
    })
  }
}

export default getWeatherThunk;