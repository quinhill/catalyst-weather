import { weatherKey } from './apiKey';

export const getForecastUrl = (input) => ({
  forecast: `http://api.openweathermap.org/data/2.5/forecast?q=${input},us&APPID=${weatherKey}`,
  current: `http://api.openweathermap.org/data/2.5/weather?q=${input},us&APPID=${weatherKey}`
})