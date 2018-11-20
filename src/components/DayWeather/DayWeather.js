import React from 'react';

import './day-weather.css';

const DayWeather = ({temp, weather, date, icon}) => {
  return (
    <div className='weather-div'>
      <p>{date}</p>
      <p>{temp}º f</p>
      <p>{weather}</p>
      <img 
        src={icon} 
        alt='weather icon' 
        className='weather-icon' 
      />
    </div>
  )
}

export default DayWeather;