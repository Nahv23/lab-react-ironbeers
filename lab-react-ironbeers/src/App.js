import React, { Component } from 'react';

import './App.css';
import Card from './Components/Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <div className="container">
          <Card url="https://source.unsplash.com/720x240/?beer" title="All Beers"/>
          <Card url="https://source.unsplash.com/720x240/?beers" title="Random Beer"/>
          <Card url="https://source.unsplash.com/720x240/?cerveza" title="New Beer"/>
        </div>
      </div>
    );
  }
}

export default App;
