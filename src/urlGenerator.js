import { weatherKey } from './apiKey';

export const getWeatherUrl = (input) => (
  `http://api.openweathermap.org/data/2.5/forecast?q=${input},us&APPID=${weatherKey}`
)