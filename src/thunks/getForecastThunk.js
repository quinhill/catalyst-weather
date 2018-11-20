import { isLoading, hasErrored, getForecast } from '../actions';
import { dataCleaner, cleanedCurrent } from '../dataCleaner';

const getForecastThunk = (urls) => {
  const { 
    current,
    forecast
  } = urls;
  return async (dispatch) =>  {
    try {
      dispatch(isLoading(true))
      const forecastResponse = await fetch(forecast)
      const currentResponse = await fetch(current)
      if (!forecastResponse.ok) {
        throw Error (forecastResponse.statusText)
      }
      dispatch(isLoading(false))
      dispatch(hasErrored(false))
      const forecastResult = await forecastResponse.json();
      const currentResult = await currentResponse.json();
      const cleanedData = dataCleaner(forecastResult)
      const today = cleanedCurrent(currentResult)
      dispatch(getForecast({...cleanedData, today}))

    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}

export default getForecastThunk;