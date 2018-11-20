const weatherCleaner = (data) => {
  const forecast = data.list.map(day => ({
    temp: Math.floor((9/5) * (day.main.temp - 273.15) + 32),
    weather: day.weather[0].description,
    date: day.dt_txt,
    icon: `./icons/${day.weather[0].icon}.svg`
  }))
  return {
    city: data.city.name,
    forecast
  }
}

const dateFilter = (weather) => {
  const today = new Date().getDate();
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const fiveDay = [];
  weather.forecast.forEach(day => {
    for (let i = today; i < today + 6; i++) {
      if (day.date === `${year}-${month}-${i} 15:00:00`) {
        day.date = `${year}/${month}/${i}`
        fiveDay.push(day)
      }
    }
  })
  return {...weather, active: true, forecast: fiveDay}
};

export const dataCleaner = (data) => {
  const weather = weatherCleaner(data);
  return dateFilter(weather);
};

export const cleanedCurrent = (data) => ({
  temp: Math.floor((9/5) * (data.main.temp - 273.15) + 32),
  weather: data.weather[0].description,
  date: 'today',
  icon: `./icons/${data.weather[0].icon}.svg`
})