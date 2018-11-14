import React, { Component } from 'react';
import Search from '../Search/Search';
import './landing.css';

export class Landing extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}

export default Landing;