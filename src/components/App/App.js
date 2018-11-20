import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import WeatherPage from '../../containers/WeatherPage/WeatherPage';
import Landing from '../../containers/Landing/Landing';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/weather-page' component={WeatherPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
