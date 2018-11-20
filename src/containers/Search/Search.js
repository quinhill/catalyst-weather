import React, { Component } from 'react';
import { getForecastUrl } from '../../urlGenerator';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getForecastThunk from '../../thunks/getForecastThunk';
import { setLocation } from '../../actions';

import './search.css';

export class Search extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
    }
  }

  changeSearch = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitSearch = async (event) => {
    event.preventDefault();

    const { search } = this.state;
    const {
      getForecast,
      history
    } = this.props;
    
    const checkStore = this.checkExisting();

    if (checkStore.length) {
      this.props.setLocation(search)
    } else {
      const forecastUrls = getForecastUrl(search);
      await getForecast(forecastUrls);
    }
    this.setState({search: ''})
    history.push('/weather-page');
  };

  checkExisting = () => {
    return this.props.weather.filter(place => {
      return place.city.toUpperCase() === this.state.search.toUpperCase()
    })
  }

  render() {

    return (
      <div>
        <form
          onSubmit={this.submitSearch}
          className='search-form'
        >
          <input
            type='text'
            onChange={this.changeSearch}
            name='search'
            value={this.state.search}
            className='search-input'
          />  
          <input
            type='submit'
            className='search-button'
            value='search'
          />
        </form>
        {
          this.props.error 
            ? <p className='error-message'>
            It appears we do not have the weather for the location you searched for. Please check you spelling and try again.
            </p>
            : null
        }
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  forecast: state.weather.forecast,
  weather: state.weather,
  error: state.hasErrored
})

export const mapDispatchToProps = dispatch => ({
  getForecast: urls => dispatch(getForecastThunk(urls)),
  setLocation: city => dispatch(setLocation(city))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));