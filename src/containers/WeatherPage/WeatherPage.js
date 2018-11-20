import React from 'react';
import Search from '../../containers/Search/Search';
import { connect } from 'react-redux';
import DayWeather from '../../components/DayWeather/DayWeather';

import './weather-page.css';

const WeatherPage = (props) => {

  let days;
  let current;

  if (props.weather) {
    const { weather } = props;
    current =
      <div className='today'>
        <h1 className='city-header'>{weather.city}</h1>
        <p>{weather.today.temp}º f</p>
        <p>{weather.today.weather}</p>
        <img
          src={weather.today.icon}
          className='weather-icon'
          alt='weather icon'
        />
      </div>
    
    days = weather.forecast.map(data => {
      return <DayWeather {...data} />
    })
  } else {
    current = null;
    days = null;
  }

  return (
    <div className='weather-page'>
      <header>

      </header>
      <Search />
      {current}
      <div className='card-container'>
        {days}
      </div>
    </div>
  )
}

const mapPropsToState = (state) => ({
  weather: state.weather.filter(place => place.active)[0],
})

export default connect(mapPropsToState)(WeatherPage);