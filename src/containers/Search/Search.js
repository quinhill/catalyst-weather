import React, { Component } from 'react';
import { getWeatherUrl } from '../../urlGenerator';
import { connect } from 'react-redux';
import getWeatherThunk from '../../thunks/getWeatherThunk';

import './search.css';

export class Search extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  changeSearch = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitSearch = async (event) => {
    event.preventDefault();
    const url = getWeatherUrl(this.state.search)
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  };

  render() {

    return (
      <form
        onSubmit={this.submitSearch}
      >
        <input
          type='text'
          onChange={this.changeSearch}
          name='search'
          value={this.state.search}
        />
        <button
          type='submit'
        >
          Search
        </button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  getWeather: url => dispatch(getWeatherThunk(url))
})

export default connect(null, mapDispatchToProps)(Search);