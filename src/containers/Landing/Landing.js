import React, { Component } from 'react';
import Search from '../Search/Search';
import { geocode } from '../../geocoder';
import './landing.css';
import getForecastThunk from '../../thunks/getForecastThunk';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getForecastUrl } from '../../urlGenerator';

export class Landing extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  render() {

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    const success = async (pos) => {
      const crd = pos.coords;
      const zipCode = await geocode(crd.latitude, crd.longitude);
      if (!this.props.weather.length) {
        const url = getForecastUrl(zipCode);
        await this.props.getForecast(url);
        this.props.history.push('/weather-page');
      }
    };
    
    const error = (err) => {
      return `ERROR(${err.code}): ${err.message}`;
    };

    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options)
    }

    return (
      <div className='landing'>
        <header></header>
        <Search />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  weather: state.weather
})

const mapDispatchToProps = dispatch => ({
  getForecast: (url) => dispatch(getForecastThunk(url))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Landing));